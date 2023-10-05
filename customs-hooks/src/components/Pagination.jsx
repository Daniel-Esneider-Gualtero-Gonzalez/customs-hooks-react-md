import { useRef } from "react"


function Pagination() {
    const refElePaginate = useRef()
  return (
    <div className='mx-auto mt-2 mb-2 w-[350px] h-[50px] border grid grid-cols-3 rounded border-black list-none'>
        <button onClick={()=>refElePaginate.current.scrollLeft -= 58} className="flex items-center  justify-center">"menos"</button>
        <div ref={refElePaginate} className='border flex items-center      overflow-hidden '>

           
            <button className="m-1 rounded flex-shrink-0 inline-block border w-[50px] h-[45px]">1</button>
            <button className="m-1 rounded flex-shrink-0 inline-block border w-[50px] h-[45px]">2</button>
            <button className="m-1 rounded flex-shrink-0 inline-block border w-[50px] h-[45px]">3</button>
            <button className="m-1 rounded flex-shrink-0 inline-block border w-[50px] h-[45px]">4</button>
            <button className="m-1 rounded flex-shrink-0 inline-block border w-[50px] h-[45px]">5</button>
             
            
            
        </div>
        <button onClick={()=>refElePaginate.current.scrollLeft += 58 } className="flex items-center  justify-center">"mas"</button>
    </div>
  )
}

export default Pagination