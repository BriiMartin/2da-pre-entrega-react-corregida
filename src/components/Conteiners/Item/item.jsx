import React from 'react';
import { Link } from 'react-router-dom'
import './item.css'

export const Item = ({ id, category, description, img, name, price, stock }) => {
    return (
        <>
            <div className="card">
                <div>{category}</div>
                <img src={img} className='img'/>
                <div className='name'>{name}</div>
                <div className='price'>$ {price}</div>
                <Link to={`/item/${id}`}>
                    <button className="btn-card">Ver Detalle</button>
                </Link>
            </div>
        </>
    )
}