import "./ItemListContainer.css"
import { obtenerProductos } from "../../data/data.js"
import { useState, useEffect } from "react"
import ItemList from "./ItemList.jsx"
import { useParams } from "react-router-dom"

const ItemListContainer = ({ texto }) => {

    const [productos, setProductos] = useState([]);

    const { idCategoria } = useParams();
    

    useEffect(()=>{
        obtenerProductos()
        .then((respuesta)=>{
            if(idCategoria){
                const productosFiltrados = respuesta.filter((producto) => producto.categoria === idCategoria)
                setProductos(productosFiltrados)
            }
            else{
                setProductos(respuesta)
            }
        })
        .catch((error)=>{
            console.log(error)
        })
        .finally(()=>{
            console.log("Finalizo la promesa")
        })
    }, [idCategoria])

    return (
    <div>
        <p className="bienvenido">{texto}</p>
        <ItemList productos = {productos}/>
    </div>
    )
}

export default ItemListContainer