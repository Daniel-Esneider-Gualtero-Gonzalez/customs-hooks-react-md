import React, { useEffect, useState } from 'react'

import { getAllcharacter } from '../services/personajes'

export function useCharactes() {
    const [error,setError] = useState(null)
    const [loading,setLoading] = useState(false)
    const [characters,setCharacters] = useState()

    
      const getData = async () => {
        setLoading(true)
        const data = await getAllcharacter()
        if(data.error) setError(data.error)
        setCharacters(data) //datos ya parseados 
        setLoading(false)
        
      }
      
      useEffect(()=>{
        getData()
      },[])

      // funcion para intentarlo nuevamente RELOAD
      const reload = ()=>{
        getData()
      }

   

  return ({
    loading,error, characters,reload
  })
}

