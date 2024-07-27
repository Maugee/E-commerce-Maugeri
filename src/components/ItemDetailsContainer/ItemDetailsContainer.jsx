import { useState, useEffect } from "react"
import ItemDetails from "./ItemDetails.jsx"
import "./ItemDetailsContainer.css"
import { useParams } from "react-router-dom"
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import db from "../../db/db.js"
import { doc, getDoc } from "firebase/firestore";


const ItemDetailsContainer = () => {

    const [producto, setProducto] = useState ({})
    const [cargando, setCargando] = useState(false)

    const { idProducto } = useParams()

    const obtenerProducto = ()=>{
        const docRef = doc(db, "productos", idProducto )
        getDoc(docRef)
        .then((respuesta)=>{
            const data = { id: respuesta.id, ...respuesta.data() }
            setProducto(data)
        })
    }

    useEffect(()=>{
        obtenerProducto()
    }, [idProducto])

    return (
    <div>
        {
            cargando ? <AiOutlineLoading3Quarters size={100} className="cargando"/> : <ItemDetails producto={producto}/>
        }
    </div>
    )
}

export default ItemDetailsContainer