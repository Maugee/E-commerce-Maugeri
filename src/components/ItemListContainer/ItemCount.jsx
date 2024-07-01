import { useState } from "react"
import { IoCartOutline } from "react-icons/io5";

const ItemCount = ({stock}) => {
    const[cantidad, setCantidad] = useState(0)

    const aumentar = () => {
        if(cantidad < stock){
            setCantidad(cantidad + 1)
        }
    }

    const reducir = () =>{
        if(cantidad > 0){
            setCantidad(cantidad - 1)
        }
    }

    const agregarAlCarrito = () =>{
        console.log("Su pedido es de: " + cantidad)
    }

    return (
    <div>
        <div className="botonCantidad">
            <button onClick={reducir}>-</button>
            <p>{cantidad}</p>
            <button onClick={aumentar}>+</button>
        </div>
        <IoCartOutline size={25} onClick={agregarAlCarrito}/>
    </div>
    )
}

export default ItemCount