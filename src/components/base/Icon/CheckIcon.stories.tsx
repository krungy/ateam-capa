import { ComponentStory, ComponentMeta } from '@storybook/react';
import styled, { css } from 'styled-components';
import { CheckIcon } from './Icon';

export default {
  title: 'base/Icon',
  component: CheckIcon,
} as ComponentMeta<typeof CheckIcon>;

const Template: ComponentStory<typeof CheckIcon> = ({ checked, ...props }) => {
  return (
    <StyledCheckbox checked={checked}>
      {checked && <CheckIcon />}
    </StyledCheckbox>
  );
};

export const check = Template.bind({});
check.args = {
  checked: false,
};

const StyledCheckbox = styled.div<{ checked: boolean }>`
  position: relative;
  display: inline-block;
  width: 18px;
  height: 18px;
  margin-right: 12px;
  box-sizing: border-box;
  border-radius: 2px;
  ${(props) =>
    props.checked
      ? css`
          background: #2196f3;
        `
      : css`
          background: #fff;
          border: 2px solid #939fa5;
        `}
  transition: all 0.5s;
  cursor: pointer;
`;
