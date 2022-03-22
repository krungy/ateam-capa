import { ComponentStory, ComponentMeta } from '@storybook/react';
import Option from './Option';
import type { OptionType } from '~types/index';
import { useState } from 'react';
import { MATERIAL_OPTIONS } from '~constants/option';

export default {
  title: 'base/Option',
  component: Option,
} as ComponentMeta<typeof Option>;

const Template: ComponentStory<typeof Option> = () => {
  const [optionList, setOptionList] = useState<OptionType[]>(MATERIAL_OPTIONS);

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
