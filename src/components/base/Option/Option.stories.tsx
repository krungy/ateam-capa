import { ComponentStory, ComponentMeta } from '@storybook/react';
import Option from './Option';
import type { OptionType } from '~types/index';
import { useState } from 'react';

export default {
  title: 'base/Option',
  component: Option,
} as ComponentMeta<typeof Option>;

const DUMMYDATA: OptionType[] = [
  { name: '알루미늄', id: '알루미늄', checked: false },
  { name: '탄소강', id: '탄소강', checked: false },
  { name: '구리', id: '구리', checked: false },
  { name: '합금강', id: '합금강', checked: false },
  { name: '강철', id: '강철', checked: false },
];

const Template: ComponentStory<typeof Option> = () => {
  const [optionList, setOptionList] = useState(DUMMYDATA);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOptionList((prev) =>
      prev.map((option) =>
        option.id === e.target.id
          ? { ...option, checked: !option.checked }
          : option,
      ),
    );
  };

  return (
    <Option
      options={optionList}
      onChange={handleChange}
      onMouseLeave={() => {}}
    />
  );
};

export const Default = Template.bind({});
