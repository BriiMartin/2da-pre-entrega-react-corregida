import React, {  useState } from "react";
import { Button} from 'antd';
import './ItemCount.css'
const ItemCount = ({ initial, stock, onAdd }) => {
    const [contador, setContador] = useState(initial);
    const isMaxReached = contador === stock;
    const isMinReached = contador === initial;
    const bajar = () => {
        if (contador > initial) {
            setContador(contador - 1);
        }
    };
    const subir = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    };
    return (
        <div className="contenedor-count">
            <p className="contador">{contador}</p>
            <div className="subcontenedor-count">
                <button onClick={bajar} disabled={isMinReached} className="resta">-</button>
                <button onClick={subir} disabled={isMaxReached} className="suma">+</button>
            </div>
            <Button type="primary" onClick={() => onAdd(contador)}>Agregar al carrito</Button>
        </div>

    );
};
export default ItemCount