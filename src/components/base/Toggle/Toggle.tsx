import React from 'react';
import styled, { css } from 'styled-components';

interface ToggleProps {
  onClick: React.MouseEventHandler;
  active: boolean;
}

const Toggle = ({ onClick, active = false }: ToggleProps) => {
  return (
    <Wrapper onClick={onClick}>
      <Track active={active} />
      <Knob active={active} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 37px;
  height: 20px;
  cursor: pointer;
`;

const Track = styled.div<{ active: boolean }>`
  position: absolute;
  top: 3px;
  left: 3px;
  width: 34px;
  height: 14px;
  border-radius: 34px;
  background: ${(props) => (props.active ? '#BBDEFB' : '#c2c2c2')};
`;

const Knob = styled.div<{ active: boolean }>`
  position: absolute;
  top: 0px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
  transition: 0.3s ease-in-out;
  ${(props) =>
    props.active
      ? css`
          right: -4px;
          background: #2196f3;
        `
      : css`
          right: 17px;
          background: #f5f5f5;
        `}
`;

export default Toggle;
