import CardRickAndMorty from './CardRickAndMorty'
import NoResultsMessage from './NoResultsMessage'
import { filterArraysProps } from "../utils/filters"

function RenderDataRickiandMorty({filters,datalist}) {
    
    const data = filterArraysProps(filters,datalist)

  return (
    <>
    
    {data.length > 0  ===true ?  data.map(character=>{
      
      return <CardRickAndMorty key={character.id} image={character.image} name={character.name} status={character.status} species={character.species} type={character.type} gender={character.gender}/>
    })
    
    :
    
    
    <NoResultsMessage />}

    </>
  )
}

export default RenderDataRickiandMorty