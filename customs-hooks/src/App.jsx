import React ,{ useState}from "react"
import { useRickyMorty } from "./hooks/useRickyMorty"
import RenderDataRickiandMorty from "./components/RenderDataRickiandMorty"
import ClientErrors from "./errors/ClientErrors"
import Loading from "./components/common/Loading"
import TempMessages from "./components/TempMessages"

import SideBar from "./components/SideBar"

function App() {
  const {loading,error,data}=useRickyMorty()
  const [searchName,setSearchName] = useState("")
  const [gender,setGender] = useState("")
  const misFilters = {name: e=> e.toLowerCase().includes(searchName.toLowerCase())}

  if(gender){
    misFilters.gender = e=>e.toLowerCase() == gender 
  }else{

    delete misFilters.gender
  }

  console.log("misfilter",misFilters)
  
  

  

  return (
    <>
    {error ? <ClientErrors isconexion={error.isconection ? error.isconection: false} statuscode={error.statuscode} /> : null}
     {loading ?  <Loading /> : null}

     {data ? console.log(data) : null}

     <div className="mb-3 mt-3">
       <span onClick={()=>setGender("male")}>MALE</span>
       <span className="mx-3" onClick={()=>setGender("female")}>FEMALE</span>
       <span className="mx-3" onClick={()=>setGender("")}>VACIAR FILTRO POR GENERO</span>

     </div>
    
     
     <input className='border mb-3 mt-3' onChange={(e)=>{
       setSearchName(e.target.value.toLowerCase())
      }}/>  

      {data ? <RenderDataRickiandMorty filters={misFilters}  datalist={data.results} />: null}

   
      
    </>
  )
}

export default App
