import React from 'react'

const ItemDetails = ({producto}) => {
    return (
        <div className='cartaProducto'>
            <img src= {producto.imagen} alt="" />
            <div>
                <h3>{producto.nombre}</h3>
                <h4>${producto.precio}</h4>
                <p>{producto.descripcion}</p>
            </div>
        </div>
    )
}

export default ItemDetails