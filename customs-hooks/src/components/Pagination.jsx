import { useRef } from "react"


function Pagination() {
    const refElePaginate = useRef()
  return (
    <div className='mx-auto mt-2 mb-2 w-[300px] border grid grid-cols-3 border-black'>
        <div className='flex justify-center items-center overflow-x-hidden'>"menos</div>
        <div ref={refElePaginate} className='border justify-center flex items-center py-1 overflow-auto '>
            <li className='m-1 w-[50px] h-[40px] border border-gray-400 bg-gray-400'></li>
            <li className='m-1 w-[50px] h-[40px] border border-gray-400 bg-gray-400'></li>
            <li className='m-1 w-[50px] h-[40px] border border-gray-400 bg-gray-400'></li>
            <li className='m-1 w-[50px] h-[40px] border border-gray-400 bg-gray-400'></li>
            <li className='m-1 w-[50px] h-[40px] border border-gray-400 bg-gray-400'></li>
            
        </div>
        <div onClick={()=>{
            let scrollWidth = refElePaginate.current.scrollWidth
            console.log("ancho del scroll horizontal", scrollWidth)
            
            console.log("ancho del scroll horizontal", scrollWidth)
            // propiedad para mover el scroll x para ir avanzando poco a poco
            console.log("scroll left" ,refElePaginate.current.scrollLeft)
            const scrollLeft = refElePaginate.current.scrollLeft += 10
            
        }} className='flex justify-center items-center'>"mas"</div>
    </div>
  )
}

export default Pagination