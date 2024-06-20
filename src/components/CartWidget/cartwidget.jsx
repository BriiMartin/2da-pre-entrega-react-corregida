import React from "react";
import { Avatar, Badge, Space } from 'antd';
import './cartwidget.css'
import { ShoppingCartOutlined } from '@ant-design/icons';
function Cartwidget() {

    return (
        <div className="carrito">
            <Badge count={1} >
            <ShoppingCartOutlined style={{ fontSize: '30px' }} className="icon"/>
            </Badge>
        </div>
        

    );
  
  } 

  export default Cartwidget