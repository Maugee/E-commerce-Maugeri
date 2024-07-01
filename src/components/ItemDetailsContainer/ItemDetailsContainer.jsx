import { useState, useEffect } from "react"
import { obtenerProductos } from "../../data/data.js"
import ItemDetails from "./ItemDetails.jsx"
import "./ItemDetailsContainer.css"
import { useParams } from "react-router-dom"

const ItemDetailsContainer = () => {

    const [producto, setProducto] = useState ({})

    const { idProducto } = useParams()

    useEffect(()=>{
        obtenerProductos()
        .then((data)=>{
            const productosfiltrados = data.find((productoData) => productoData.id == idProducto)
                setProducto(productosfiltrados)
        })
    }, [idProducto])

    return (
    <div>
        <ItemDetails producto={producto}/>
    </div>
    )
}

export default ItemDetailsContainer