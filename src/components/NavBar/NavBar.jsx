import React from "react";
import './NavBar.css'
import Cartwidget from '../CartWidget/cartwidget'
import { Link } from "react-router-dom";
function Menu() {
    return (

      <nav className="navbar">
        <Link to={'/'}>
          <h1 className="titulo-1">Mi-Ecommerce</h1>
        </Link>

        <ul className='nav-ul'>
          <Link to={'/'}>
            <li className="lista-item">Inicio</li>
          </Link>
          <Link to={'/categoria/Notebooks'}>
            <li className="lista-item">Notebooks</li>
          </Link>
          <Link to={'/categoria/consolas'}>
            <li className="lista-item">Consolas</li>
          </Link>
          <Link to={'/categoria/Auriculares'}>
            <li className="lista-item">Auriculares</li>
          </Link>
  
          
          <Cartwidget />
        </ul></nav> ) }