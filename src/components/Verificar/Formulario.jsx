
const Formulario = ({ datosForm, enviarCompra, guardarDatosInput }) => {

    return (
    <div>
        <form onSubmit={enviarCompra}>
        <label>Nombre: </label>
        <input type="text" name='nombre' value={datosForm.nombre} onChange={guardarDatosInput} />

        <label >Telefono: </label>
        <input type="text" name='telefono' value={datosForm.telefono} onChange={guardarDatosInput} />

        <label>Email: </label>
        <input type="text" name='email' value={datosForm.email} onChange={guardarDatosInput} />

        <label>Repetir Email: </label>
        <input type="text" name='email' value={datosForm.email} onChange={guardarDatosInput} />

        <label>Ciudad: </label>
        <input type="text" name='ciudad' value={datosForm.ciudad} onChange={guardarDatosInput} />

        <button className='EnviarOrden' type='submit'>Enviar Orden</button>
        </form>
    </div>
    )
}

export default Formulario