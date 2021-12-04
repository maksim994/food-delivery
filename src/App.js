import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { NavBar } from './Components/NavBar';
const GlobalStyle = createGlobalStyle`
  html{
    box-sizing: border-box;
  }

  *,
  *::after,
  *::before{
    box-sizing: inherit;
  }

  body{
    margin: 0px;
    padding: 0px;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }
  img{
    max-width: 100%;
    height: auto
  }
  a{
    text-decoration: none;
    color: inherit
  }
  ul{
    list-style: none;
    margin: 0px;
    padding: 0px;
  }

  h1, h2{
    font-family: 'Montserrat', sans-serif;
  }
`;

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <NavBar />
    </React.Fragment>
  );
}

export default App;
