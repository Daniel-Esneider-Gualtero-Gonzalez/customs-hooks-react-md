import React from "react"
import { useAuthenticUser } from "./hooks/userAuthentic"
import ClientErrors from "./errors/ClientErrors"
import Forbidden from "./components/errors/Forbidden"

function App() {
  const {loading,error,user}=useAuthenticUser()
  

  return (
    <>
    {error ? <ClientErrors isconexion={error.isconection ? error.isconection: false} statuscode={error.statuscode} /> : null}
     {loading ?  <div>CARGANDO</div> : null}

     {user ? console.log(user) : null}

      
    </>
  )
}

export default App
