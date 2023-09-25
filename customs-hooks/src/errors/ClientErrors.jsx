import NotFoundError from "../components/errors/NotFoundError"
import Forbidden from "../components/errors/Forbidden"
import ServerError from "../components/errors/ServerError"
import BadRequest from "../components/errors/BadRequest"
import UnauthorizedError from "../components/errors/UnauthorizedError"
import ErrorConexion from "../components/errors/ErrorConexion"

//  renderiza las vistas de errores o exitos 
//  falta agregar una propiedad opcional que indigue si el mensaje va a ser estatico o no
function ClientErrors({isconexion=false,statuscode,textmessage}) {
  return (
    <>                          
    {statuscode===200 && isconexion === false ? <div>{textmessage}</div> : null}

    {statuscode===400 && isconexion === false ? <BadRequest /> : null}

    {statuscode===401 && isconexion === false ? <UnauthorizedError /> : null}

    {statuscode===403 && isconexion === false ? <Forbidden /> : null}

    {statuscode===404 && isconexion === false ? <NotFoundError /> : null}


    {isconexion===true ? <ErrorConexion />: null}

    

    </>
  )
}

export default ClientErrors