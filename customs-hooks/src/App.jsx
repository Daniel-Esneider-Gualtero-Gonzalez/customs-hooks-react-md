import React from "react"
import { useCharactes } from "./hooks/hooksCharacters"
import ClientErrors from "./errors/ClientErrors"

function App() {
  const {loading,error,characters}=useCharactes()
  

  return (
    <>
    {error ? <ClientErrors statuscode={error.statuscode} textmessage={error.message}/> : null}
     {loading ?  <div>CARGANDO</div> : null}
    </>
  )
}

export default App
