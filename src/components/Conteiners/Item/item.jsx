import React from 'react';
import { Link } from 'react-router-dom'
import './item.css'
export const Item = ({ producto }) => {
  console.log(producto)
    return (
      <div className='contenedor'>
        <div className="contenedor-item-2">
          <h2 className='titulo-item'>{producto.nombre}</h2>
          <p className='p-item'>{producto.categoria}</p>
          <img src={producto.imagen} alt={producto.nombre} className='img-item'/>
          <Link to={`/item/${producto.id}`}>
              <button className="btn-card">Ver Detalle</button>
          </Link>
        </div>
      </div>
    );
  }