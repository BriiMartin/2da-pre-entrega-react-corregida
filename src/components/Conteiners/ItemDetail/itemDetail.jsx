import React, { useState, useContext } from 'react';
import '../ItemDetail/itemDetail.css'
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../../../context/shopContext';
import { Link } from 'react-router-dom';

const ItemDetail = ({ producto }) => {
  const [cart, setCart] = useState(false)
  const { agregarCarrito } = useContext(CartContext)

  const onAdd = (count) => {
    setCart(true);
    agregarCarrito(producto, count);
};
  return (
    <div className='details'>
      <h2 className='titulo-detail'>{producto.nombre}</h2>
      <img src={producto.imagen} className='img-detail'/>
      <p className='descp-detail'>{producto.descripción}</p>
      <p className='precio-detail'>Precio: ${producto.precio}</p>
      
      {producto.stock === 0 ? (
        <h2>EL PRODUCTO NO TIENE STOCK</h2>
          ) : (
          cart ? (
            <Link to={'/cart'}>Ir al carrito</Link>
          ) : (
            <ItemCount initial={1} stock={producto.stock} onAdd={onAdd} />
          )
       )}
    </div>
  );
};
export default ItemDetail;