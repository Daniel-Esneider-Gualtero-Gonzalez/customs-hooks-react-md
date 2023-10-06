import { useEffect, useState } from "react";


export function useRickyMorty(page=1) {
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null)
    const [data,setData] = useState(null)
    const [cantPages,setCantPages] = useState(null)

   

    const getData = async () =>{
        setLoading(true)
        
            const getDataCharacters = await fetch (`https://rickandmortyapi.com/api/character/?page=${page}`)
            if(!getDataCharacters.ok) setError({statuscode:getDataCharacters.status})
    
            const dataParse = await getDataCharacters.json()
    
            if(cantPages===null) setCantPages(dataParse.info.pages)
            
            setLoading(false)
            setData(dataParse)
            
        
       
    }


    useEffect(()=>{
        getData()
    },[page])

    return {
        loading,error,data,cantPages
    }
}