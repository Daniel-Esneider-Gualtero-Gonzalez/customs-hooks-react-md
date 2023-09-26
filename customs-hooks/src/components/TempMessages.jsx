import { useEffect, useState } from 'react'

function TempMessages({textmessage}) {
    const [show,setShow]= useState(false)
    useEffect(()=>{
        setShow(true),
        setTimeout(()=> setShow(false) ,5000)
    },[])
  return (
    <>
    {show ? <div className='rounded w-[210px] h-[70px] border border-black absolute right-2 top-2'>{textmessage}</div> : null}
    </>
  )
}

export default TempMessages