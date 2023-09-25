import React from 'react'

//  renderiza las vistas de errores o exitos 
//  falta agregar una propiedad opcional que indigue si el mensaje va a ser estatico o no
function ClientErrors({isconexion=false,statuscode,textmessage}) {
  return (
    <>                          
    {statuscode===200 && isconexion === false ? <div>{textmessage}</div> : null}

    {statuscode===404 && isconexion === false ? <div>{textmessage}</div> : null}

    </>
  )
}

export default ClientErrors