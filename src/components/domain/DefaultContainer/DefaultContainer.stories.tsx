import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import DefaultContainer from './DefaultContainer';

export default {
  title: 'domain/DefaultContainer',
  component: DefaultContainer,
} as ComponentMeta<typeof DefaultContainer>;

const Template: ComponentStory<typeof DefaultContainer> = () => (
  <DefaultContainer />
);

export const Default = Template.bind({});
