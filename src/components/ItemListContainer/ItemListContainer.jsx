import "./ItemListContainer.css"
import { useState, useEffect } from "react"
import ItemList from "./ItemList.jsx"
import { useParams } from "react-router-dom"
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import db from "../../db/db.js"
import { collection, getDocs, query, where } from "firebase/firestore";


const ItemListContainer = ({ texto }) => {

    const [productos, setProductos] = useState([]);
    const [cargando, setEstaCargando] = useState(false)

    const { idCategoria } = useParams();
    
    const obtenerProductos = ()=>{
        const productosRef = collection(db, "productos")
        getDocs(productosRef)
        .then((respuesta)=> {
            const data = respuesta.docs.map((productoDb)=>{
                return { id: productoDb.id, ...productoDb.data() }
            })

            setProductos(data)
        })
    }

    const obtenerProductosFiltrados = ()=>{
        const productosRef = collection(db, "productos")
        const q = query( productosRef, where("categoria", "==", idCategoria))
        getDocs(q)
        .then((respuesta)=>{
            const data = respuesta.docs.map((productoDb)=>{
                return { id: productoDb.id, ...productoDb.data()  }
            })

            setProductos(data)
        })
    }

    useEffect(()=>{
        if(idCategoria){
            obtenerProductosFiltrados()
        }
        else{
            obtenerProductos() 
        }
    }, [idCategoria])

    return (
    <div>
        <p className="bienvenido">{texto}</p>
        {
            cargando ? <AiOutlineLoading3Quarters size={100} className="cargando"/> : <ItemList productos = {productos}/>
        }
    </div>
    )
}

export default ItemListContainer