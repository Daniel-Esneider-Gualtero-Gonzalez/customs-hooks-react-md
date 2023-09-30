import React from 'react'
import {BsGenderMale} from 'react-icons/bs'
import {BsGenderFemale} from 'react-icons/bs'

function SideBarFilterDataRicky({setFilGender,setFilStatus}) {
  return (
    <div className='list-none    bg-gray-900 text-white'>
        <h1 className='mx-auto w-fit mt-2 mb-2'>Filtrar Por</h1>
    <section>
    <li className='text-center py-2 group hover:border-b border-black  font-semibold'>Gender
        <ul className='text-start hidden group-hover:block'>

            <li onClick={()=>setFilGender("male")} className=' py-2 px-3  hover:border-b-4 border-blue-600'>Male <BsGenderMale  className='text-blue-600 mx-auto mt-2 text-xl'/></li>
            <li onClick={()=>setFilGender("female")} className=' py-2 px-3  hover:border-b-4 border-pink-600'>Female <BsGenderFemale className='text-pink-600 mx-auto mt-2 text-xl' /></li>
            <li onClick={()=>setFilGender("")} className='py-2 px-3 hover:border-b-4  border-yellow-400'>Eliminar filtro</li>
        
        </ul>
    </li>
    </section>

    <section>
    <li className='text-center py-2 group hover:border-b border-black    font-semibold'>Status
        <ul className='text-start  hidden group-hover:block'>

            <li onClick={()=>setFilStatus("alive")} className='py-2 px-3  hover:border-b-4  border-alive'>Alive</li>
            <li onClick={()=>setFilStatus("dead")} className='py-2 px-3 hover:border-b-4  border-dead'>Dead</li>
            <li onClick={()=>setFilStatus("unknown")} className='py-2 px-3 hover:border-b-4  border-unknow'>Unknow</li>
            <li onClick={()=>setFilStatus("")} className='py-2 px-3 hover:border-b-4  border-yellow-400'>Eliminar filtro</li>
        
        </ul>
    </li>
    </section>


</div>
  )
}

export default SideBarFilterDataRicky