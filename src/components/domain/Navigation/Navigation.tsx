import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import logo from '~assets/images/logo.png';
import colorlogo from '~assets/images/colorlogo.png';
import { COLORS } from '~constants/index';

interface MenuContentProps {
  name: string;
  isSlider: boolean;
}

const MenuContent = ({ name, isSlider }: MenuContentProps) => (
  <>
    <button>
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 10.5H10.5V12.1667H12V10.5ZM12 7.16667H10.5V8.83333H12V7.16667ZM13.5 13.8333H7.5V12.1667H9V10.5H7.5V8.83333H9V7.16667H7.5V5.5H13.5V13.8333ZM6 3.83333H4.5V2.16667H6V3.83333ZM6 7.16667H4.5V5.5H6V7.16667ZM6 10.5H4.5V8.83333H6V10.5ZM6 13.8333H4.5V12.1667H6V13.8333ZM3 3.83333H1.5V2.16667H3V3.83333ZM3 7.16667H1.5V5.5H3V7.16667ZM3 10.5H1.5V8.83333H3V10.5ZM3 13.8333H1.5V12.1667H3V13.8333ZM7.5 3.83333V0.5H0V15.5H15V3.83333H7.5Z"
          fill={isSlider ? '#323D45' : 'white'}
        />
      </svg>
      {name}
    </button>
    {!isSlider && (
      <div>
        <svg
          width="3"
          height="18"
          viewBox="0 0 3 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.50024 1V17"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="square"
          />
        </svg>
      </div>
    )}
    <button>로그아웃</button>
  </>
);

const Navigation = () => {
  const [isMenuShowing, setMenuShowing] = useState<boolean>(false);

  const handleMenuClick = useCallback(() => {
    setMenuShowing((prev) => !prev);
  }, []);

  return (
    <>
      <NavContainer>
        <Hamburger onClick={handleMenuClick}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3 8V6H21V8H3ZM3 13H21V11H3V13ZM3 18H21V16H3V18Z"
              fill="white"
            />
          </svg>
        </Hamburger>
        <Logo href="/#">
          <img src={logo} alt="CAPA 파트너스" />
        </Logo>
        <PCMenu>
          <MenuContent name="A 가공 업체" isSlider={false} />
        </PCMenu>
        <Slider isShowing={isMenuShowing}>
          <SliderTitle>
            <Logo href="/#">
              <img src={colorlogo} alt="CAPA 파트너스" />
            </Logo>
          </SliderTitle>
          <SliderContent>
            <MenuContent name="파트너정밀가공" isSlider={true} />
          </SliderContent>
        </Slider>
        {isMenuShowing && (
          <Backdrop onClick={handleMenuClick} isShowing={isMenuShowing} />
        )}
      </NavContainer>
    </>
  );
};

interface SliderProps {
  isShowing: boolean;
}

const NavContainer = styled.nav`
  position: sticky;
  left: 0;
  top: 0;
  display: flex;
  z-index: 3000;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 25px 40px;
  background-color: ${COLORS.primary_700};
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);

  @media screen and (max-width: 767px) {
    padding: 16px 60px;
  }
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  img {
    width: 11em;
    height: 1.4em;

    @media screen and (max-width: 767px) {
      width: 6.5em;
      height: 0.85em;
    }
  }
`;

const Hamburger = styled.button`
  display: none;
  @media screen and (max-width: 767px) {
    display: block;
    position: absolute;
    top: 10px;
    left: 20px;
  }
`;

const PCMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 1.4em;
  width: 14.85em;

  button {
    display: flex;
    align-items: center;
    font-size: 1rem;
    font-family: 'Noto Sans KR';
    font-weight: 500;
    color: ${COLORS.white};

    svg {
      position: relative;
      top: -1px;
      left: -8px;
      height: 1em;
    }
  }

  svg {
    position: relative;
    top: 2px;
  }

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const Backdrop = styled.div<SliderProps>`
  display: none;

  @media screen and (max-width: 767px) {
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: ${COLORS.text_default};
    opacity: 0.5;
  }
`;

const Slider = styled.div<SliderProps>`
  display: none;

  hr {
    margin: 0;
    padding: 0;
  }

  @media screen and (max-width: 767px) {
    z-index: 3001;
    position: absolute;
    left: 0;
    top: 0;
    width: 280px;
    height: 100vh;
    display: block;
    background-color: ${COLORS.white};
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
    transition: transform 0.5s;
    transform: translateX(${({ isShowing }) => (isShowing ? 0 : -280)}px);
  }
`;

const SliderTitle = styled.div`
  padding: 15px 20px;
  border-top: 1px solid transparent;
  border-bottom: 1px solid ${COLORS.grey_border};
`;

const SliderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 36px 32px;
  gap: 2em;

  button {
    display: block;
    font-family: 'Noto Sans KR';
    font-weight: 500;
    font-size: 1rem;
    color: inherit;
    svg {
      position: relative;
      top: 2px;
      margin-right: 8px;
    }
  }
`;

export default Navigation;
