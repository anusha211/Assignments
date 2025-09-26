import React from 'react'
import './App.css'
import Input from './Components/Input';
import Button from './Components/Button';
import CardList from './Components/Cards/ListCards';
import { CartProvider } from './Context/CartContext';
import Cart from './Components/Cart';


function App() {

  return (
    <>
       <CartProvider>
  
        <CardList />
        <Cart/>
     
    </CartProvider>

    </>
  )
}

export default App
