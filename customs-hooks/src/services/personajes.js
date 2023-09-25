
import { baseUrl } from "./apiConfig";
import { getErrorMessage } from "../errors/errors";


export const getAllcharacter = async ()=>{
  
    try {
        const getCharacters = await fetch(`${baseUrl}characters`)
        
        // si es diferente de 200 lanzamos una exepcion  con estos datos para
        //  tomar decisiones en donde se llama esta funcion
        if(!getCharacters.ok){
            const error = {statuscode:getCharacters.status, message:getErrorMessage(getCharacters.status)}
            throw error
        } 
        
        const data = getCharacters.json()
        return data
    } catch (error) {  
        // RETORNAR UN OBJETO QUE CONTENGA LA PROPIEDAD 
        // BOOLEAN QUE SI FUE POR CONEXION , Y EL STATUSCODE Y MESSAJE 
        const isErrorConection = error instanceof TypeError
        

        return {error:{isconection: isErrorConection,...error}}
    }
}

//  estructura para hacer solicitudes async

async function estructure(params) {
    // realizamos la request 

    // verificamos si es diferente de 200

    // la estructura del error al devolver es la siguiente

    // {error: {status:num , message: ""}} si es not found , authorizat, etc
}