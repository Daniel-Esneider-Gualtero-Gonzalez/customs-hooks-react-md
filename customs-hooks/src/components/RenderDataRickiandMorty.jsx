import CardRickAndMorty from './CardRickAndMorty'
import { filterArraysProps } from "../utils/filters"

function RenderDataRickiandMorty({filters,datalist}) {
    
    const data = filterArraysProps(filters,datalist)

  return (
    <>
    {data.map(character=>{
      
        return <CardRickAndMorty image={character.image} name={character.name} status={character.status} species={character.species} type={character.type} gender={character.gender}/>
    })}
    </>
  )
}

export default RenderDataRickiandMorty