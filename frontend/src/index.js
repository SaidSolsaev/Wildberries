import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthContextProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <CartProvider>
        <App style={{width: "100vw"}}/>
      </CartProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

