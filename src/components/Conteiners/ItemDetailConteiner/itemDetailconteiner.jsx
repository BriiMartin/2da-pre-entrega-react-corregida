import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/itemDetail';
import { getProductById } from '../../../Data/asyncmonck';

const ItemDetailConteiner = () => {
  const { idItem } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getProductById(idItem)
      .then(itemDetails => {
        setItem(itemDetails);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [idItem]);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      {item && <ItemDetail item={item} />}
    </div>
  );
};

export default ItemDetailConteiner;