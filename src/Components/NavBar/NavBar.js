import React, {useContext} from 'react';
import styled from 'styled-components';
import logoImg from '../../images/logo.svg';
import signImg from '../../images/sign.svg';
import { Context } from '../Functions/context';
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
const ImgLogOut = styled.img`
margin-bottom: 3px;
`

const User = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
`

const LogOut = styled.span`
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
`

const Figure = styled.figure`
  margin: 0px 30px
`


export const NavBar = () => {
  
  const {auth : {authentication, logIn, logOut}} = useContext(Context);


  return (
    <NavBarStyled>
      <Logo>
        <ImgLogo src={logoImg} alt="logo" />
        <H1>FOOD DELIVERY</H1>
      </Logo>
      {authentication ? 
        <User>
            <Figure>
              <ImgLogOut src={signImg} alt="Выйти" alt={authentication.displayName} />
              <figcaption>{authentication.displayName}</figcaption>
            </Figure>
            <LogOut title="Выйти" onClick={logOut}>X</LogOut>
        </User>
        :
        <BtnSign onClick={logIn}>
          <Figure>
              <ImgSign src={signImg} alt="Войти" />
              <figcaption>Войти</figcaption>
            </Figure>
        </BtnSign>
      }
    </NavBarStyled>
  )
}