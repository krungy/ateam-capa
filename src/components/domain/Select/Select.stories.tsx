import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import type { OptionType } from '~types/index';
import Select from './Select';

export default {
  title: 'domain/Select',
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = ({
  title,
  options,
  onChange,
}) => {
  const [optionList, setOptionList] = useState(options);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOptionList((prev) =>
      prev.map((option) =>
        option.id === e.target.id
          ? { ...option, checked: !option.checked }
          : option,
      ),
    );
  };

  return <Select title={title} options={optionList} onChange={handleChange} />;
};

const METHOD_OPTIONS: OptionType[] = [
  { name: '밀링', id: '밀링', checked: false },
  { name: '선반', id: '선반', checked: false },
];

const MATERIAL_OPTIONS: OptionType[] = [
  { name: '알루미늄', id: '알루미늄', checked: false },
  { name: '탄소강', id: '탄소강', checked: false },
  { name: '구리', id: '구리', checked: false },
  { name: '합금강', id: '합금강', checked: false },
  { name: '강철', id: '강철', checked: false },
];

export const Method = Template.bind({});
Method.args = {
  title: '가공 방식',
  options: METHOD_OPTIONS,
};

export const Material = Template.bind({});
Material.args = {
  title: '재료',
  options: MATERIAL_OPTIONS,
};
