import { string, object, mixed } from "yup";

let userSchema = object({
    nombre: string().required("El campo nombre no puede quedar vacio"),
    telefono: string().required("El campo telefono no puede quedar vacio"),
    email: string().email("El campo email no tiene el formato correcto").required("El campo email no puede quedar vacio"),
    ciudad: string().required("El campo ciudad no puede qudar vacio")
})


const validateForm = async(dataForm)=>{
    try{
        await userSchema.validate(dataForm)
        return { status: "success" }
    }
    catch(error){
        return { status: "error", message: error.message }
    }
}

export default validateForm