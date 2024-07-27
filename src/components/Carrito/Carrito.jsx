import { CartContext } from "../../Context/CartContext"
import { useContext } from "react"
import "./Carrito.css"
import { IoTrashOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Carrito = () => {

    const { carrito, borrarProducto, vaciarCarrito, precioTotal } = useContext(CartContext)


    if(carrito.length === 0){
        return(
            <div className="carritoVacio">
                <p>El carrito esta vacio ...</p>
            </div>
        )
    }

    return (
    <div>
        {
            carrito.map((productoCarrito)=> (
                <div className="cardCarrito" key={productoCarrito.id}>
                    <img src={productoCarrito.imagen} alt="" />
                    <div className="descripcionCarrito">
                        <h3>{productoCarrito.nombre}</h3>
                        <p>Precio c/u: {productoCarrito.precio}</p>
                        <p>{productoCarrito.cantidad}</p>
                        <p>Total Producto: ${productoCarrito.precio * productoCarrito.cantidad}</p>
                        <IoTrashOutline className="borrar" size={30} onClick={()=> borrarProducto(productoCarrito.id)} />
                    </div>
                </div>
            ))
        }
        <div className=" finalCarrito">
        <p>Precio Total: {precioTotal()}</p>
        <button onClick={vaciarCarrito}>Vaciar Carrito</button>
        <Link to="/checkout" className="boton" >Terminar la Compra</Link>
        </div>
    </div>
    )
}

export default Carrito