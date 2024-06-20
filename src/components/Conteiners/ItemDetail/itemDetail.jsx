import React from 'react';
import '../ItemDetail/itemDetail.css'

const ItemDetail = ({ item }) => {
  return (
    <div className='details'>
      <h2 >{item.name}</h2>
      <img src={item.img} className='img'/>
      <p>{item.description}</p>
      <p>Precio: ${item.price}</p>
      <p>Stock: {item.stock}</p>
    </div>
  );
};

export default ItemDetail;