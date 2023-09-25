import React from 'react'

//  falta agregar una propiedad opcional que indigue si el mensaje va a ser estatico o no
function ClientErrors({isconexion,statuscode,textmessage}) {
  return (
    <>                          aqui iria el componente del error especifico
    {statuscode===2000 && isconexion === false ? <div>{textmessage}</div> : null}

    </>
  )
}

export default ClientErrors