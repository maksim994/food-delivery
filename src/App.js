import React from 'react';

import { NavBar } from './Components/NavBar';
import { Menu } from './Components/Menu';
import { GlobalStyle } from './Components/GlobalStyle';
import { BannerSection } from './Components/Banner';
import { ModalItem } from './Components/ModalItem';


function App() {

  const [openItem, setOpenItem] = React.useState(null);

  return (
    <React.Fragment>
      <GlobalStyle />
      <NavBar />
      <BannerSection />
      <Menu setOpenItem={setOpenItem} />
      <ModalItem openItem={openItem} setOpenItem={setOpenItem}/>
    </React.Fragment>
  );
}

export default App;
