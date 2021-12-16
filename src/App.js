import React from 'react';

// /import {firebase} from 'firebase/app';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';


import { NavBar } from './Components/NavBar/NavBar';
import { Menu } from './Components/Menu/Menu';
import { GlobalStyle } from './Components/Style/GlobalStyle';
import { ModalItem } from './Components/Modal/ModalItem';
import { Order } from './Components/Order/Order';

import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrder } from './Components/Hooks/useOrder';
import { useAuth } from './Components/Hooks/useAuth';
import { useTitle } from './Components/Hooks/useTitle';


const firebaseConfig = {
  apiKey : "AIzaSyCnbgBbk3t_te0qfFYWbYkp3OCiJu2K-TY" , 
  authDomain : "fooddelivery-6bc09.firebaseapp.com" , 
  databaseURL : "https://fooddelivery-6bc09-default-rtdb.europe-west1.firebasedatabase.app" , 
  projectId : "fooddelivery-6bc09" , 
  storageBucket : "fooddelivery-6bc09.appspot.com" , 
  messagingSenderId : "727508820061" , 
  appId : "1: 727508820061: web: 214e732a869878ba99edb4" 
};


firebase.initializeApp(firebaseConfig);

function App() {

  const auth = useAuth(firebase.auth);

  const openItem = useOpenItem();
  const orders = useOrder();

  useTitle(openItem.openItem);

  return (
    <React.Fragment>
      <GlobalStyle />
      <NavBar {...auth}/>
      <Order {...orders} {...openItem} {...auth} firebaseDataBase = {firebase.database}/>
      <Menu {...openItem} />
      { openItem.openItem && <ModalItem {...openItem} {...orders}/>}
      
    </React.Fragment>
  );
}

export default App;
