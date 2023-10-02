import {BsGenderMale} from 'react-icons/bs'
import {BsGenderFemale} from 'react-icons/bs'

function CardRickAndMorty({image,name,status,species,type="desconocido",gender}) {

  // validaciones para aplicar estilos dinamicamente
  
  const STYLESSTATUS = `${status}`.toLowerCase() === "alive".toLowerCase() ? 'shadow-alive': `${status}`.toLowerCase() === "dead".toLowerCase() ? 'shadow-dead' : 'shadow-desconocido'
  const STYLESGENDER = `${gender}`.toLowerCase() === "female".toLowerCase() ? <BsGenderFemale className='text-pink-600 mx-auto mt-2 text-2xl' /> : <BsGenderMale  className='text-blue-600 mx-auto mt-2 text-2xl'/>
 
  return (
    <div className='bg-blue-400 bg-opacity-20 m-2 text-white flex justify-center border border-black w-[420px] sm:w-[450px] hover:scale-105  rounded py-2 px-2'>
        <div className=''>
            <img className={`${STYLESSTATUS}   w-[150px] sm:w-[180px]  rounded-[10px] `} src={image} alt="" />
        </div>

        <div className=' ml-2 rounded '>
            <h1 className='mx-auto w-fit font-bold border-b'>{name}</h1>
            
            <div className=' mx-auto   my-2'>

               <div className='mt-1 flex justify-center px-2 py-2'>
                <span className='mx-2 font-semibold overflow-hidden '>Status: {status}</span>
                <span className='mx-auto font-semibold'>Species: {species}</span>
               </div>

                <div className='mt-1 flex   justify-center px-2 py-2'>
                <span className='mx-2 font-semibold whitespace-nowrap overflow-hidden overflow-ellipsis w-[100px]'>Type: {type}</span>
                <span className='mx-auto font-semibold '>Gender:{STYLESGENDER}</span>
                </div>
            </div>
        </div>

    </div>
  )
}

export default CardRickAndMorty