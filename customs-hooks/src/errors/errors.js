
const ERROR_MESSAGES = {
    CLIENT_ERRORS : {
        400 : "Solicitud incorrecta",
        401: "El usuario no esta autenticado y se requiere autenticación",
        403: "El servidor comprende la solicitud, pero no se le permite cumplirla",
        404: "El recurso solicitado no se encontró en el servidor",
        405: "El método de solicitud (GET, POST, etc.) no está permitido para el recurso",
        421 : "Limite de solicitudes a este recurso excedido",
    },
    SERVER_ERRORS : {
        500 : "Error interno del servidor, intente de nuevo o mas tarde",

    }
    
    

}



//  recibe un status code y devule solo el mesnaje que corresponda
export const getErrorMessage = (statuscode) => {
     if (typeof statuscode !== 'number' || !statuscode) {
        throw new Error('El argumento debe ser un número de código de estado válido');
      }

      const message = ERROR_MESSAGES.CLIENT_ERRORS[statuscode] || ERROR_MESSAGES.SERVER_ERRORS[statuscode];

      if (!message) {
        return 'Código de estado desconocido o no definido';
      }

      return message
    
}


