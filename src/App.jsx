import React from "react";
import './App.css'
import Menu  from './components/NavBar/NavBar'
import ItemListConteiner from './components/Conteiners/ItemListConteiner/itemListConteiner'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  ItemDetailConteiner  from "./components/Conteiners/ItemDetailConteiner/itemDetailconteiner";
import CartProvider from "./context/shopContext";
import Cart from "./components/Conteiners/Cart/Cart";
import Checkout from "./components/Conteiners/Checkout/Checkout";
import Footer from "./components/Footer/Footer";



function App() {
  
  return (
    
    <BrowserRouter>
      <CartProvider>
        <Menu />
        <Routes>
          <Route path='/' element={<ItemListConteiner />} />
          <Route path='/categoria/:categoryId' element={<ItemListConteiner />} />
          <Route path="/item/:id" element={<ItemDetailConteiner />}/>
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />

        </Routes>

        <Footer />

      </CartProvider>

    </BrowserRouter>
    
    
  )
}
export default App