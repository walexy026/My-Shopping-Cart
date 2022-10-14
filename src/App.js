import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
// import { Container } from 'react-bootstrap';
import Cart from './Pages/Cart/Cart';
import Home from './Pages/Home/Home';
import Header from './Components/Header';
import { Router } from '@reach/router';
// import {useThemeHook} from './Components/Themesetter' 

function App() {
  // const {theme} = useThemeHook()
  return (
    // <main className={theme? 'bg-black': 'bg-light-2'}>
    //  Appvv 
    // </main>
    <div >
     <Header/>
     {/* <Home/>
     <Cart/> */}
     <Router>
      <Home path='/home'  />
      <Cart path='/cart'  />
     </Router>
    </div>
  );
}

export default App;
