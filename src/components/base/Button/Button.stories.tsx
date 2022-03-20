import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './Button';
import Refresh from '~assets/images/refresh.png';

export default {
  title: 'base/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = ({ children, ...args }) => {
  return <Button {...args}>{children}</Button>;
};

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  children: '요청 내역 보기',
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary',
  children: '채팅하기',
};

export const Borderless = Template.bind({});
Borderless.args = {
  type: 'borderless',
  children: '필터링 리셋',
  imageSrc: Refresh,
};
