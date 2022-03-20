import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Toggle from './Toggle';

export default {
  title: 'base/Toggle',
  component: Toggle,
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = ({ active }) => {
  const [isActive, setIsActive] = useState<boolean>(active);
  return (
    <Toggle onClick={() => setIsActive((prev) => !prev)} active={isActive} />
  );
};

export const True = Template.bind({});
True.args = {
  active: true,
};

export const False = Template.bind({});
False.args = {
  active: false,
};
