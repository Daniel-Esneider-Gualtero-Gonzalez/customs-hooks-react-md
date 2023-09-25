import { useEffect, useState } from "react"
import { userAuth } from "../services/user"

export const useAuthenticUser = ()=>{
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null)
    const [user,setUser] = useState(null)

    const authUser = async ()=>{

        setLoading(true)
        // retorna la data de auth del usuario
        const authResponse = await userAuth()

        if(authResponse.error) setError(authResponse.error)
        setLoading(false)
        setUser(authResponse)

        
    }

    useEffect(()=>{

        authUser()
        
    },[])
    

    return {
        loading,error,user
    }

}