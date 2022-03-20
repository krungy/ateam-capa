import { ReactChild } from 'react';
import styled from 'styled-components';

interface ButtonProps {
  children: ReactChild;
  type: 'primary' | 'secondary' | 'borderless';
  imageSrc?: string;
}

const Button = ({
  children,
  type = 'primary',
  imageSrc,
  ...props
}: ButtonProps) => {
  const buttonStyle: React.CSSProperties =
    type === 'primary'
      ? {
          backgroundColor: '#2196F3',
          color: '#FFFFFF',
        }
      : type === 'secondary'
      ? {
          backgroundColor: '#FFFFFF',
          color: '#2196F3',
          border: '1px solid #2196F3',
          boxSizing: 'border-box',
        }
      : {
          height: '20px',
          fontFamily: 'Noto Sans KR Regular',
          fontWeight: 400,
          fontSize: '12px',
          lineHeight: 1.67,
          gap: '12px',
          color: '#2196f3',
          marginLeft: '16px',
        };

  return (
    <ButtonContainer type="button" style={{ ...buttonStyle }} {...props}>
      {imageSrc && <ImageContainer src={imageSrc} alt="buttonImage" />}
      {children}
    </ButtonContainer>
  );
};

const ButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  padding: 6px 12px;
  font-family: Noto Sans KR Medium;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.43;
  border-radius: 4px;
  :active {
    opacity: 0.7;
  }
`;

const ImageContainer = styled.img`
  width: 16px;
  height: 16px;
`;

export default Button;
