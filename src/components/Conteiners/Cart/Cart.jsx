import React, { useContext } from 'react';
import { CartContext } from '../../../context/shopContext';
import { Link } from 'react-router-dom';
import './Cart.css'
import CartItem from './CartItem';


const Cart = () => {
    const { cart, vaciarCarrito, eliminarItem, totalCarrito } = useContext(CartContext);
    return (
        <div className="cart-container">
            {cart.length === 0 ? 
                <div className="empty-cart">
                    <h1>No hay productos en el carrito</h1>
                    <Link to="/" className="back-to-home">Ir al inicio</Link> 
                }
                </div>
            ) }
            <div className="cart-list">
                <h1>Lista de carrito</h1>
                {cart.map((p) => (
                    <CartItem key={p.producto.id} producto={p} eliminarItem={eliminarItem} />
                ))}
            </div>

            <div className="cart-summary">
                <p>Total: ${totalCarrito()}</p>
                <button onClick={vaciarCarrito} className="vaciar-carrito-button">Vaciar carrito</button>
                <Link to="/checkout" className="checkout-button">Completar compra</Link>
            </div> 
            </div>