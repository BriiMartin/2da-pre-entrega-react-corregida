import React, { useEffect, useState } from 'react'
import { ItemList } from '../ItemList/itemList'
import { getProducts } from '../../../Data/asyncmonck'
import './itemListConteiner.css'
import { useParams } from 'react-router-dom'

 const ItemListConteiner = () => {
    const [productos, setProductos] = useState([])

    const { idCategory } = useParams()

    useEffect(() => {
        getProducts(idCategory)
            .then(res => setProductos(res))
            .catch(err => console.error(err))
    }, [idCategory])


    return (
        <>
            <h1 className='titulo' >{idCategory ? <>{idCategory}</> : <>Pagina Principal</>}</h1>
            {productos ? <ItemList productos={productos} /> : <div>Cargando...</div>}
        </>
    )
}

export default ItemListConteiner;