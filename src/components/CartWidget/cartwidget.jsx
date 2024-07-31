import React, { useContext } from 'react';
import {  Badge } from 'antd';
import './cartwidget.css'
import { ShoppingCartOutlined } from '@ant-design/icons';
import { CartContext } from "../../context/shopContext";
import { Link } from 'react-router-dom';

const Cartwidget = () => {
    const { cantidadCarrito } = useContext(CartContext)
    return (

        <div className="carrito">
            <Link to="/cart">
                <Badge count={cantidadCarrito()}>
                    <ShoppingCartOutlined style={{ fontSize: '25px' }} className="icon"/>
                </Badge>
            </Link>    
        </div>

    );
};
export default Cartwidget;