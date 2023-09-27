

function SideBar() {
    return (
        <div className='list-none border  border-gray-500 sm:w-[500px] sm:h-creen bg-blue-100 rounded  sm:h-screen'>
            <section>
            <li className='text-center py-2 group hover:border-b border-black  font-semibold'>PRODUCTOS
                <ul className='text-start hidden group-hover:block'>

                    <li className='ml-4 py-2 px-2  hover:border-b-4 border-white'>yuca</li>
                    <li className='ml-4 py-2 px-2  hover:border-b-4 border-white'>papa</li>
                
                </ul>
            </li>
            </section>

            <section>
            <li className='text-center py-2 group hover:border-b border-black    font-semibold'>SERVICIOS
                <ul className='text-start  hidden group-hover:block'>

                    <li className='ml-4 py-2 px-2  hover:border-b-4  border-white'>Domicilio</li>
                    <li className='ml-4 py-2 px-2  hover:border-b-4  border-white'>hola</li>
                
                </ul>
            </li>
            </section>


        </div>
    )
}

export default SideBar
