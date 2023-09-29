import React from 'react'

function SideBarFilterDataRicky({setFilGender,setFilStatus}) {
  return (
    <div className='list-none   border-gray-500'>
    <section>
    <li className='text-center py-2 group hover:border-b border-black  font-semibold'>Gender
        <ul className='text-start hidden group-hover:block'>

            <li className='ml-4 py-2 px-2  hover:border-b-4 border-black'>Male</li>
            <li className='ml-4 py-2 px-2  hover:border-b-4 border-black'>Female</li>
        
        </ul>
    </li>
    </section>

    <section>
    <li className='text-center py-2 group hover:border-b border-black    font-semibold'>Status
        <ul className='text-start  hidden group-hover:block'>

            <li className='ml-4 py-2 px-2  hover:border-b-4  border-black'>Alive</li>
            <li className='ml-4 py-2 px-2  hover:border-b-4  border-black'>Dead</li>
            <li className='ml-4 py-2 px-2  hover:border-b-4  border-black'>Unknow</li>
        
        </ul>
    </li>
    </section>


</div>
  )
}

export default SideBarFilterDataRicky