import React from 'react'
import ItemCount from "../ItemCount/ItemCount"
import { CartContext } from '../../Context/CartContext'
import { useContext } from 'react'

const ItemDetails = ({producto}) => {

    const { agregarProducto } = useContext(CartContext)

    const agregarAlCarrito = (contador)=>{
        const productoCarrito = {
            ...producto,
            cantidad: contador
        }

        agregarProducto(productoCarrito)
    }

    return (
        <div className='cartaProducto'>
            <img src= {producto.imagen} alt="" />
            <div>
                <h3>{producto.nombre}</h3>
                <h4>${producto.precio}</h4>
                <p>{producto.descripcion}</p>
                <ItemCount agregarAlCarrito={agregarAlCarrito} stock={producto.stock} />
            </div>
        </div>
    )
}

export default ItemDetails