import React from 'react'

function NoResultsMessage() {
  return (
    <div className='  w-[400px] h-[200px] flex justify-center items-center'>
        
        <div>
            <span className='block text-center mb-2 text-2xl'>😢</span>
            <span  className='font-bold text-white   mx-auto'>No se encontrar resultados para la busqueda</span>
        </div>

    </div>
  )
}

export default NoResultsMessage