import React from 'react';
import styled from 'styled-components';
import logoImg from '../../images/logo.svg';
import signImg from '../../images/sign.svg';

const NavBarStyled = styled.header`
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 999;
  height: 80px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  background-color: #299B01;
  color: #FFF;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const H1 = styled.h1`
  margin-left: 10px
`;

const ImgLogo = styled.img`
  height: 70px
`;

const BtnSign = styled.button`
  background-color: transparent;
  margin: 0px;
  padding: 0px;
  outline: none;
  border: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #FFF;
  text-transform: uppercase;
  cursor: pointer;
`;

const ImgSign = styled.img`
  margin-bottom: 3px;
`


export const NavBar = () => (
  <NavBarStyled>
    <Logo>
      <ImgLogo src={logoImg} alt="logo" />
      <H1>FOOD DELIVERY</H1>
    </Logo>
    <BtnSign>
      <ImgSign src={signImg} alt="Войти" />
      Войти
    </BtnSign>
  </NavBarStyled>
)