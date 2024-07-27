import React from 'react'
import "./Verificar.css"
import { useState } from 'react'
import Formulario from './Formulario'
import { CartContext } from '../../Context/CartContext'
import { useContext } from 'react'
import db from '../../db/db.js'
import { collection, addDoc } from 'firebase/firestore'
import validateForm from '../../utils/validacionForm.js'
import { toast } from 'react-toastify'

const Verificar = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext)

    const [datosForm, setDatosForm] = useState({
        nombre: "",
        telefono: "",
        email: "",
        ciudad: ""
    })

    const [idOrden, setidOrden] = useState (null)

    const guardarDatosInput = (event)=>{
        setDatosForm( { ...datosForm, [event.target.name]: event.target.value } )
    }

    const enviarCompra = async(event)=>{
        event.preventDefault()
        const datos = {
            comprador: { ...datosForm},
            productos: [...carrito],
            total: precioTotal()
        }

        const respuesta = await validateForm(datosForm)
        if(respuesta.status === "success"){
            subirOrden(datos)
        }
        else{
            toast.warn(respuesta.message)
        }
    }


    const subirOrden= (datos)=>{
        const orderRef = collection(db, "ordenes")
        addDoc(orderRef, datos)
        .then( (respuesta) =>{
            setidOrden(respuesta.id)
        })
        .finally(()=>{
            vaciarCarrito()
        })
    }

    return (
    <div>
        {
            idOrden ? (<p className='idOrden'>Id de tu orden: {idOrden}</p> ) : <Formulario datosForm={datosForm} guardarDatosInput={guardarDatosInput} enviarCompra={enviarCompra}  />
        }
    </div>
    )
}

export default Verificar