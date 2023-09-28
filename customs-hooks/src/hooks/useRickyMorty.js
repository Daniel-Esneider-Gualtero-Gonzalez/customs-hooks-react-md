import { useEffect, useState } from "react";


export function useRickyMorty() {
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null)
    const [data,setData] = useState(null)

    const getData = async () =>{
        setLoading(true)
        const getDataCharacters = await fetch ("https://rickandmortyapi.com/api/character/")
        if(!getDataCharacters.ok) setError({statuscode:getDataCharacters.status})

        const dataParse = await getDataCharacters.json()
        setLoading(false)
        setData(dataParse)
    }


    useEffect(()=>{
        getData()
    },[])

    return {
        loading,error,data
    }
}