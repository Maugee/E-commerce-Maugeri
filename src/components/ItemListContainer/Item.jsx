import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ producto }) => {
    return (
        <div className='card'>
            <img src={producto.imagen} alt="" width={250} height={180}/>
            <h3>{producto.nombre}</h3>
            <div className='precio'>
                <p>${producto.precio}</p>
                <p>{producto.descripcion}</p>
            </div>
            < Link to= { "/detalle/" + producto.id} >
            <button className='detalles'>Ver detalles</button>
            </Link>
        </div>
    )
}

export default Item