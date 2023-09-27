

import { getErrorMessage } from "../errors/errors";

// api de datos de covid actuales en estados unido
const apiUrl = "https://pokeapi.co/api/v2/pokemon";

export async function getPokemonsDito() {

    try {
        const getData = await fetch(apiUrl)

        

        if(!getData.ok){
            
            const error = {statuscode:getData.status, message:getErrorMessage(getData.status)}
            throw error
        }

        const data = await getData.json()

        return data

    } catch (error) {
        
        const isErrorConection = error instanceof TypeError
        
       
        return {error:{isconection: isErrorConection,...error}}
        
    }
    
}