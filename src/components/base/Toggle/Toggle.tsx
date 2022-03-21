import React from 'react';
import styled, { css } from 'styled-components';
import { COLORS } from '~constants/index';

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
  background: ${(props) =>
    props.active ? `${COLORS.blue_50}` : `${COLORS.border}`};
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
          background: ${COLORS.blue};
        `
      : css`
          right: 17px;
          background: ${COLORS.background_white};
        `}
`;

export default Toggle;
