import React ,{ useState}from "react"
import { useRickyMorty } from "./hooks/useRickyMorty"
import RenderDataRickiandMorty from "./components/RenderDataRickiandMorty"
import ClientErrors from "./errors/ClientErrors"
import Loading from "./components/common/Loading"
import TempMessages from "./components/TempMessages"

import SideBarFilterDataRicky from "./components/SideBarFilterDataRicky"
import InputSearch from "./components/InputSearch"
import CardRickAndMorty from "./components/CardRickAndMorty"

import NoResultsMessage from "./components/NoResultsMessage"
import Pagination from "./components/Pagination"

import SideBarUserProfile from "./components/SideBarUserProfile"

function App() {
  const [page,setPage] = useState(1)
  const {loading,error,data,cantPages}=useRickyMorty(page)
 
  const [searchName,setSearchName] = useState("")
  const [gender,setGender] = useState("")
  const [status,setStatus] = useState("")
  const misFilters = {name: e=> e.toLowerCase().includes(searchName.toLowerCase())}

  if(gender){
    misFilters.gender = e=>e.toLowerCase() == gender 
  }else{

    delete misFilters.gender
  }
  if(status){
    misFilters.status = e=> e.toLowerCase() === status.toLowerCase()
  }else{
    delete misFilters.status
  }
  
  

  

  return (
    <>
    {data ? console.log(data) : null}
    {error ? <ClientErrors isconexion={error.isconection ? error.isconection: false} statuscode={error.statuscode} /> : null}
     


     {/* <SideBarUserProfile /> */}
     

      <div className="border bg-gray-900 border-black sm:grid grid-cols-5   gap-1 py-1 px-1">
        
      <div className=" border  sm:col-span-2 md:col-span-1 h-fit">
       {loading ? <Loading />  :  <SideBarFilterDataRicky setFilGender={setGender} setFilStatus={setStatus} />}
      </div>
      
        <div className=" border h-fit  sm:col-span-3 md:col-span-4">

          <div className="py-5 w-auto">
          <InputSearch onChange={(e)=>setSearchName(e.target.value)} className='shadow-starwark  mx-auto flex py-1 px-1 rounded sm:w-[230px] md:w-[240px] lg:w-[280px] xl:w-[310px] 2xl:w-[340px]' />
          </div>
          
            
         
         <section className="w-auto border flex flex-wrap justify-center">
         {data && loading===false ? <RenderDataRickiandMorty filters={misFilters}  datalist={data.results} /> : <Loading />  }
         </section>

         <Pagination cantItems={cantPages} page={page} setPage={setPage} />
         
        </div>
      </div>
      
    </>
  )
}

export default App
