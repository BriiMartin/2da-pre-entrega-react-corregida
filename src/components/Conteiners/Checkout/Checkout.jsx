import React, { useContext, useState, useRef } from 'react';
import { db } from '../../../firebase/client';
import { collection, addDoc, updateDoc, doc, getDoc } from 'firebase/firestore';
import { CartContext } from '../../../context/shopContext';
import './Checkout.css';


const Checkout = () => {
  const { cart, totalCarrito, vaciarCarrito } = useContext(CartContext);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmacion, setEmailConfirmacion] = useState("");
  const [error, setError] = useState("");
  const [ordenId, setOrdenId] = useState("");
  const formRef = useRef(null);
  const scrollToBottom = () => {
    formRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
  };
  const manejadorFormulario = (event) => {
    event.preventDefault();
    if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
      setError("Completar los campos requeridos"); }
    }  
    }