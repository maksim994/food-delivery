import React from 'react';

import { NavBar } from './Components/NavBar';
import { Menu } from './Components/Menu';
import { GlobalStyle } from './Components/GlobalStyle';
import { BannerSection } from './Components/Banner';


function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <NavBar />
      <BannerSection />
      <Menu />
    </React.Fragment>
  );
}

export default App;
