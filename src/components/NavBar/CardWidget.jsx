import React from 'react'
import { FaShoppingCart } from "react-icons/fa";

const CardWidget = () => {
    return (
    <div className='carrito'>
        <FaShoppingCart size={50} color='silver'/>
        <p>0</p>
    </div>
    )
}

export default CardWidget