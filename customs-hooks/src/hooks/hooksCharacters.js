import React, { useEffect, useState } from 'react'
import { getAllcharacter } from '../services/personajes'

export function useCharactes() {
    const [loading,setLoading] = useState(false)
    const [characters,setCharactes] = useState()
    useEffect( ()=>{
      const getData = async () => {
        const data = await getAllcharacter()
        console.log(data)
      }
      getData()
    },[])
  return ({
    loading,characters
  })
}

