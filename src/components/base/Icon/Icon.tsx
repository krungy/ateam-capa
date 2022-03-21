import React from 'react';
import styled from 'styled-components';

interface ArrowProp {
  checked: boolean;
}

export const ArrowIcon = ({ checked, ...props }: ArrowProp) => {
  return (
    <ArrowBox {...props}>
      <svg
        width="10"
        height="6"
        viewBox="0 0 10 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0.5L5 5.5L10 0.5H0Z" fill={checked ? '#fff' : '#939FA5'} />
      </svg>
    </ArrowBox>
  );
};

export const CheckIcon = ({ ...props }) => {
  return (
    <CheckIconBox {...props}>
      <svg
        width="14"
        height="10"
        viewBox="0 0 14 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5 10L0 5.19231L1.4 3.84615L5 7.30769L12.6 0L14 1.34615L5 10Z"
          fill="white"
        />
      </svg>
    </CheckIconBox>
  );
};

const ArrowBox = styled.span`
  display: flex;
  align-items: center;
  margin: 1.5px 0;
  margin-right: 8px;
`;

const CheckIconBox = styled.div`
  position: absolute;
  bottom: 3px;
  left: 2px;
`;
