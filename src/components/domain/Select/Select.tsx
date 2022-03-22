import React, { useState, useCallback } from 'react';
import styled, { css } from 'styled-components';
import type { OptionType } from '~types/types';
import { Option, ArrowIcon } from '~components/base';
interface SelectProps {
  title: string;
  options: OptionType[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Select = ({ title, options, onChange }: SelectProps) => {
  const [isMouseOn, setIsMouseOn] = useState(false);

  const onMouseEnter = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsMouseOn(true);
  }, []);
  const onMouseLeave = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMouseOn(false);
  }, []);

  const isChecked = options.some((option) => option.checked);
  const countChecked = useCallback(() => {
    const count = options.reduce(
      (prev, cur) => prev + (cur.checked ? 1 : 0),
      0,
    );
    return count ? `(${count})` : '';
  }, [options]);

  return (
    <Container onMouseEnter={onMouseEnter}>
      <Wrapper checked={isChecked}>
        <SelectTitle>
          {title}
          {countChecked()}
        </SelectTitle>
        <ArrowIcon checked={isChecked} />
      </Wrapper>
      {isMouseOn && (
        <Option
          options={options}
          onChange={onChange}
          onMouseLeave={onMouseLeave}
        />
      )}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  cursor: pointer;
`;

const Wrapper = styled.div<{ checked: boolean }>`
  display: flex;
  align-items: center;
  padding: 2px 10px;
  border: 1px solid #939fa5;
  border-radius: 4px;
  &:hover {
    border: 1px solid #2196f3;
  }
  ${(props) =>
    props.checked &&
    css`
      background-color: #1565c0;
      span {
        color: #fff !important;
      }
    `}
`;

const SelectTitle = styled.span`
  display: flex;
  align-items: center;
  margin-right: 11px;
  margin-bottom: 2px;
  padding: 0 1px;
  font-weight: 500;
  font-size: 12px;
  line-height: 24px;
  color: #323d45;
`;

export default Select;
