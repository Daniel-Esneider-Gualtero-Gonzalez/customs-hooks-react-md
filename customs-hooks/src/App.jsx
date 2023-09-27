import React ,{ useState}from "react"
import { usePokemonsDito } from "./hooks/usePokemonstDito"
import ClientErrors from "./errors/ClientErrors"
import Loading from "./components/common/Loading"
import TempMessages from "./components/TempMessages"

import SideBar from "./components/SideBar"

function App() {
  const {loading,error,pokemons}=usePokemonsDito()
  const [filter,setFilter] = useState(null)

  const pokeFilterName = pokemons ? pokemons.results.filter(poke=>poke.name.includes(filter)) : null
  

  

  return (
    <>
    {/* {error ? <ClientErrors isconexion={error.isconection ? error.isconection: false} statuscode={error.statuscode} /> : null}
     {loading ?  <Loading /> : null}

     {pokemons ? console.log(pokemons) : null} */}

     <input className='border mb-3 mt-3' onChange={(e)=>{
       setFilter(e.target.value)
      }}/>  
    <div className='flex flex-wrap'>
     
     {pokemons && !filter ? pokemons.results.map(poke=>{
       return <span className='border px-2'>{poke.name}</span>
     })   : pokemons ?  pokeFilterName.map(poke=>{

       return <span className='border px-2'>{poke.name}</span>

    }) : null} 
     </div>

     

     

    {/* <SideBar /> */}
      
    </>
  )
}

export default App
