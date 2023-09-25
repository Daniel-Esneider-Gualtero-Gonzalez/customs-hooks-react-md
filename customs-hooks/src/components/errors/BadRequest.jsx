import badRequesImg  from '../../assets/errors/400img.png'

function BadRequest() {
    const bgImage = {'backgroundImage':`url(${badRequesImg})`, 'backgroundSize':'400px',  'backgroundPosition':'50% 30%'}
  return (
    <div className="relative h-[400px] bg-no-repeat    rounded  sm:w-screen sm:h-screen border  border-black " style={bgImage} >
      <h1 className='w-fit mx-auto text-2xl font-bold mt-5'>Bad request</h1>

     <div className='absolute bottom-0 sm:bottom-4  w-[100%] border-black'>
     <button className=' flex mx-auto text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 w-fit rounded  font-bold py-2 px-2  justify-center items-center border'>Volver a la pagina pricipal</button>
     </div>

    </div>
  )
}

export default BadRequest