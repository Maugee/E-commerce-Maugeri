import { useContext } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';

const CardWidget = () => {

    const { cantidadTotal } = useContext(CartContext)

    let cantidad = cantidadTotal()

    return (
    <Link to="/carrito" className='carrito'>
        <FaShoppingCart size={50}  className={cantidad > 0 ? "carritoVerde" : "carritoSilver"}/>
        <p>{cantidad > 0 && cantidad}</p>
    </Link>
    )
}

export default CardWidget