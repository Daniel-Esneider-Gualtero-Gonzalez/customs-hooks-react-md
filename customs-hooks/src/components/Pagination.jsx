
import ItemsPagination from "./ItemsPagination"


function Pagination({cantItems,page,setPage}) {
   
  return (
    <div className='bg-white mx-auto mt-2 mb-2 w-[350px] h-[50px]  grid grid-cols-3 rounded shadow-unknow list-none'>
        
          <ItemsPagination cantItems={cantItems} page={page} setPage={setPage}  />
             
    </div>
  )
}

export default Pagination