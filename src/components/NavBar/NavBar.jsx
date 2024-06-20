import React from "react";
import './NavBar.css'
import Cartwidget from '../CartWidget/cartwidget'
import { Link } from "react-router-dom";

function Menu() {

    return (
  
      <nav className="navbar">
        <Link to={'/'}>
          <h1>Liluna</h1>
        </Link>
        
        <ul className='nav-ul'>

          <Link to={'/'}>
            <li className="lista-item">Inicio</li>
          </Link>
          <Link to={'/Category/Notbooks'}>
            <li className="lista-item">Notbooks</li>
          </Link>
          <Link to={'/Category/Consolas'}>
            <li className="lista-item">Consolas</li>
          </Link>
          <Link to={'/Category/Auriculares'}>
            <li className="lista-item">Auriculares</li>
          </Link>
  
          

          <Cartwidget />

        </ul>
        
      </nav>
  
    );
  
  } 

  export default Menu