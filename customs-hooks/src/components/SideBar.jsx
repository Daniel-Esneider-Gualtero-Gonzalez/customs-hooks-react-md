import React from 'react'

function SideBar() {
    return (
        <div className='border  border-gray-500 w-[500px] rounded h-[200px]'>
            <section>
            <li className='text-center py-2 group border  font-semibold'>PRODUCTOS
                <ul className='text-start hidden group-hover:block'>

                    <li className='ml-4 py-2 px-2  hover:border-b-4'>yuca</li>
                    <li className='ml-4 py-2 px-2  hover:border-b-4'>papa</li>
                
                </ul>
            </li>
            </section>

            <section>
            <li className='text-center py-2 group border bg-green-400  font-semibold'>SERVICIOS
                <ul className='text-start  hidden group-hover:block'>

                    <li className='ml-4 py-2 px-2  hover:border-b-4'>Domicilio</li>
                    <li className='ml-4 py-2 px-2  hover:border-b-4'>hola</li>
                
                </ul>
            </li>
            </section>


        </div>
    )
}

export default SideBar
