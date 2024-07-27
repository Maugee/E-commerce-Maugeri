import React, { useState } from 'react'



const ItemCount = ({ agregarAlCarrito, stock }) => {
    const [contador, setContador] = useState(1)

    const sumarContador = ()=>{
        if(contador < stock){
          setContador(contador + 1)
        }
    }

    const restarContador = () =>{
      if(contador > 1){
        setContador(contador - 1)
      }
    }


  return (
    <div>
      <div className='masMenos'>
        <button onClick={restarContador}>-</button>
        <p>{contador}</p>
        <button onClick={sumarContador}>+</button>
      </div>

        <button className='agregar' onClick={()=> agregarAlCarrito(contador)}>Agregar Al Carrito</button>
    </div>
  )
}

export default ItemCount