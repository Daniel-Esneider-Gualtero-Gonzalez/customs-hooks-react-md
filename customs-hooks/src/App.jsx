import React from "react"
import { useAuthenticUser } from "./hooks/userAuthentic"
import ClientErrors from "./errors/ClientErrors"
import Loading from "./components/common/Loading"
import TempMessages from "./components/TempMessages"

import SideBar from "./components/SideBar"

function App() {
  const {loading,error,user,reload}=useAuthenticUser()
  

  return (
    <>
    {/* {error ? <ClientErrors isconexion={error.isconection ? error.isconection: false} statuscode={error.statuscode} /> : null}
     {loading ?  <Loading /> : null}

     {user ? console.log(user) : null}

     {user && !error ? <TempMessages textmessage={"login exitoso"} /> : null}

     {error  ? <button onClick={()=> reload()}>intentar de nuevo</button> : null} */}

    <SideBar />
      
    </>
  )
}

export default App
