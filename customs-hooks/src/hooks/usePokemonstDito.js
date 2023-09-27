
import { useState,useEffect } from "react";

import { getPokemonsDito } from "../services/pokemonsDito";

export function usePokemonsDito() {
    
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null)
    const [pokemons,setPokemons] = useState(null)

    const getData = async ()=>{
        setLoading(true)
         const getPokemons = await getPokemonsDito()

         if(getPokemons.error) setError(getPokemons.error)
         setLoading(false)
         setPokemons(getPokemons)
    }

    useEffect(() => {
        getData()
    }, [])


    return {
        loading,error,pokemons
    }
    
}