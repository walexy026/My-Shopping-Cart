import React from 'react';
import ReactDOM from 'react-dom/client';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import {CartProvider} from 'react-use-cart'
//  import { Themesetter } from './Components/Themesetter';
render( 
<React.StrictMode>
  {/* <Themesetter> */}
  <CartProvider>
  <App/>
  </CartProvider>
  {/* </Themesetter> */}
</React.StrictMode>
,document.getElementById('root'));
// );

// )
// const root = ReactDOM.createRoot(
// root.render(
