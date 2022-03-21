import { CheckIcon } from '~components/base/Icon/Icon';
import styled, { css } from 'styled-components';
import type { OptionType } from '~types/index';

interface OptionProps {
  options: OptionType[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onMouseLeave: (e: React.MouseEvent) => void;
}

const Option = ({ options, onChange, onMouseLeave }: OptionProps) => {
  const optionList = options.map((option) => {
    return (
      <OptionList key={option.id}>
        <Label htmlFor={option.name}>
          <Checkbox
            id={option.name}
            type="checkbox"
            checked={option.checked}
            onChange={onChange}
          />
          <StyledCheckbox checked={option.checked}>
            {option.checked && <CheckIcon />}
          </StyledCheckbox>
          <Content>{option.name}</Content>
        </Label>
      </OptionList>
    );
  });

  return <Wrapper onMouseLeave={onMouseLeave}>{optionList}</Wrapper>;
};

const Wrapper = styled.div`
  position: absolute;
  top: 36px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 130px;
  padding: 17px 12px;
  background: #fff;
  border: 1px solid #939fa5;
  border-radius: 4px;
  cursor: pointer;
  z-index: 1000;
`;

const OptionList = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  overflow: hidden;
  white-space: nowrap;
`;

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

const Content = styled.span`
  display: inline-block;
  padding-right: 2px;
  font-weight: 500;
  font-size: 14px;
`;

export default Option;
