
import { baseUrl } from "./apiConfig";


export const getAllcharacter = async ()=>{
  
    try {
        const getCharacters = await fetch(`${baseUrl}characters`)
        
        const data = getCharacters.json()
        return data
    } catch (error) {  
        // RETORNAR UN OBJETO QUE CONTENGA LA PROPIEDAD 
        // BOOLEAN QUE SI FUE POR CONEXION , Y EL STATUSCODE Y MESSAJE 
        return "SS"
    }
}

//  estructura para hacer solicitudes async

async function estructure(params) {
    // realizamos la request 

    // verificamos si es diferente de 200

    // la estructura del error al devolver es la siguiente

    // {error: {status:num , message: ""}} si es not found , authorizat, etc
}