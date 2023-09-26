import { getErrorMessage } from "../errors/errors"
import { headers } from "./apiConfig"

// Realiza la peticion de login al servidor con las credenciales del usuario
export const userAuth = async ()=>{

    const data = {username:"hol@", password:"hola"}

    try {
        const authUser = await fetch(`http://localhost:3000/login`,{

            headers:{ 
                ...headers.user
             },
             method : 'POST',
            body: JSON.stringify(data),
        })
        

        if(!authUser.ok) {
            const error = {statuscode:authUser.status, message:getErrorMessage(authUser.status)}
            throw error
        }

        const user = authUser.json()

        return user

        
        
    } catch (error) {
        // RETORNAR UN OBJETO QUE CONTENGA LA PROPIEDAD 
        // BOOLEAN QUE SI FUE POR CONEXION , Y EL STATUSCODE Y MESSAJE 
        const isErrorConection = error instanceof TypeError
        

        return {error:{isconection: isErrorConection,...error}}
        
    }


}