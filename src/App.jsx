import React from "react";
import './App.css'
import Menu  from './components/NavBar/NavBar'
import ItemListConteiner from './components/Conteiners/ItemListConteiner/itemListConteiner'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailConteiner from "./components/Conteiners/ItemDetailConteiner/itemDetailconteiner";

function App() {
  

  return (
    <BrowserRouter>

      <Menu />

      <Routes>
        <Route path='/' element={<ItemListConteiner />} />
        <Route path='/category/:idCategory' element={<ItemListConteiner />} />
        <Route path='/item/:idItem' element={<ItemDetailConteiner />} />
      </Routes>
      

    </BrowserRouter>
    
  )
}

export default App
