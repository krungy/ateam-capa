import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Select from './Select';
import { METHOD_OPTIONS, MATERIAL_OPTIONS } from '~constants/index';

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
