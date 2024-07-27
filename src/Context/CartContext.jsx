import { createContext, useState } from "react";


const CartContext = createContext()

const CartProvider = ({ children }) =>{
    const [carrito, setCarrito] = useState([])
    
    const agregarProducto = (producto)=>{
        const condicion = estaEnElCarrito(producto.id) 

        if(condicion){
            const productosModificados = carrito.map((productoCarrito)=>{
                if(productoCarrito.id === producto.id){
                    return { ...productoCarrito, cantidad : productoCarrito.cantidad + producto.cantidad}
                }
                else{
                    return productoCarrito
                }
            })
            setCarrito(productosModificados)
        }
        else{
            setCarrito([ ...carrito, producto ])
        }
    }

    const estaEnElCarrito = (idProducto)=>{
        const condicion =  carrito.some ((producto) => producto.id === idProducto)
        return condicion
    }

    const cantidadTotal = ()=>{
        const cantidad = carrito.reduce((total, producto) => total + producto.cantidad, 0)
        return cantidad
    }


    const vaciarCarrito = ()=>{
        setCarrito([])
    }

    const borrarProducto = (idProducto)=>{
        const productoFiltrados = carrito.filter ((productoCarrito)=> productoCarrito.id !== idProducto)
        setCarrito(productoFiltrados)
    }

    const precioTotal= ()=>{
        const precio = carrito.reduce((total, producto)=> + (producto.cantidad * producto.precio), 0)
        return precio
    }


    console.log(carrito)

    return(
        <CartContext.Provider value={ { carrito, agregarProducto, cantidadTotal, vaciarCarrito, borrarProducto, precioTotal } }>
            { children }
        </CartContext.Provider>
    )
}


export  { CartProvider, CartContext}
