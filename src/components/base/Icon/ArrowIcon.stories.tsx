import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArrowIcon } from './Icon';

export default {
  title: 'base/Icon',
  component: ArrowIcon,
} as ComponentMeta<typeof ArrowIcon>;

const Template: ComponentStory<typeof ArrowIcon> = ({ checked }) => {
  return <ArrowIcon checked={checked} />;
};

export const arrow = Template.bind({});
arrow.args = {
  checked: false,
};
