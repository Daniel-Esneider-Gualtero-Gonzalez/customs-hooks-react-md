
const CHARACTERS = {
    421 : "Limite de solicitudes a este recurso excedido",
    500 : "Error al obtener los personajes, intente de nuevo o mas tarde",
        
    

}




const getErrorMessage = (statuscode) => {
    if(!statuscode) return console.log("Error falta un argumento valido")

    for (const code in CHARACTERS) {
       console.log( typeof `${statuscode}`)
        if(code === `${statuscode}`) return console.log(CHARACTERS[code])
    }
    
}

getErrorMessage(500)