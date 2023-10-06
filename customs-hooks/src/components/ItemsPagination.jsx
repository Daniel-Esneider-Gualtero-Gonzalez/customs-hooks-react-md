import { useRef, useState } from "react"

import React from 'react'

function ItemsPagination({cantItems,page,setPage}) {
  
  const refElePaginate = useRef()


  let itemsToRender = []
  for (let i = 0; i < cantItems; i++) {                                        // si la pagina es igual al item actual                                        
    itemsToRender = [...itemsToRender, <button key={i} onClick={()=>setPage((i+1))} className={`${page === (i+1) ? 'bg-blue-600 font bold border-none text-white' : null} m-1 border-black rounded flex-shrink-0 inline-block border w-[50px] h-[45px]`}>{(i+1)}</button>]
    
  }
  return (
    <>
    <button  onClick={()=>{
      if(page>1){
        setPage(e=>e-1)
        refElePaginate.current.scrollLeft -= 58
      }
    }} disabled={page === 1} className=" rounded font-semibold hover:border-none hover:bg-green-400 hover:text-white flex items-center  justify-center">Previus</button>
    
    <div ref={refElePaginate} className=' flex items-center      overflow-hidden '>

    {itemsToRender ? itemsToRender.map(item => item ) : null }

    </div>

    <button  onClick={()=>{
      if(page < cantItems){
        // aumentamos el scroll left y ponemos la pagina siguiente
        refElePaginate.current.scrollLeft += 58
        setPage(e=> e+1)
      }
    } } disabled={page === cantItems} className=" rounded border-green-600 font-semibold hover:border-none hover:bg-green-400 hover:text-white flex items-center  justify-center">Next</button>
    
    </>
  )
}






export default ItemsPagination




