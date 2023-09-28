
import { filterArraysProps } from "../utils/filters"

function RenderDataRickiandMorty({filters,datalist}) {
    
    const data = filterArraysProps(filters,datalist)

  return (
    <>
    {data.map(perso=>{
        return <div>name:{perso.name} "status": {perso.status},
        "species": {perso.species},
        "type": {perso.type},
        "gender": {perso.gender}</div>
    })}
    </>
  )
}

export default RenderDataRickiandMorty