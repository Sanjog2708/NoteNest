import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromPastes } from '../redux/pasteSlice';
import toast from 'react-hot-toast';
import { NavLink } from 'react-router-dom';
import ShareButton from './ShareButton';
const Paste = () => {
  const pastes = useSelector((state)=>state.paste.pastes);
  console.log(pastes);
  const dispatch = useDispatch();
  const [searchTerm,setSearchTerm] = useState('');
  const[flag,setFlag] = useState(true);
  const filteredData = pastes.filter(
    (paste)=>paste.title.toLowerCase().includes(searchTerm.toLowerCase( ))
    //  or
    // (paste)=>{
    //   const title = paste.title.toLowerCase();
    //   if(title.toLowerCase().includes(searchTerm.toLowerCase())) return true;
    //   else return false;
    // }
  )
  function handleDelete(pasteId){
    dispatch(removeFromPastes(pasteId));
  }
  return (  
  
    <div className='min-h-[660px]  bg-zinc-900 p- flex flex-col gap-11 items-center'>

      <input type="text"
        className='p-2 rounded-2xl text-gray-400 bg-zinc-800 outline-none border-2 border-gray-700 w-[500px]  mt-5 pl-7'
        placeholder='Search here'
        value={searchTerm}  
        onChange={(e)=>setSearchTerm(e.target.value)}
      />
      <div className='flex flex-col gap-5 w-1/2'>
        {
          filteredData.length === 0?(
            < div className='text-gray-400 font-bold mx-auto mt-32  h-72 rounded-xl text-3xl p-10  '>Not Found</div>
          ):
          (
              filteredData.map(
                (paste)=>{
                  return(
                    <div className='text-white bg-zinc-800 w-[100%] px-7 py-3 rounded-xl border-2 border-zinc-800 overflow-y-auto'>

                      <div className='flex justify-between'>
                        <div className='text-lg font-semibold text-orange-400'>
                          {paste.title} 
                        </div>
                        <div className='text-md bg-zinc-700 px-2  py-1 rounded-md text-pink-500'  >
                           {paste.createAt}
                        </div>
                      </div>
                     

                      <div className='flex items-end mt-3 gap-0'>
                        <div className=' w-3/4 h-20 text-lg  overflow-hidden font-light text-gray-300'>
                          {paste.content}
                        </div>
                        <a className='text-blue-500 text-lg -mb-[3px]' href={`/pastes/${paste._id}`}>..more</a>
                      </div>

                      <div className='flex flex-row gap-4 place-content-evenly mt-5'>
                      
                        <NavLink to={`/?pasteId=${paste._id}`}>
                          <button className='bg-yellow-500 hover:bg-yellow-600 px-4 py-1 rounded-lg'>Edit</button>
                        </NavLink>

                        <button className='bg-red-500 hover:bg-red-600 px-4 py-1 rounded-lg' onClick={()=>handleDelete(paste._id)}>Delete</button>
                          
                        <button className='bg-gray-500 hover:bg-gray-600 px-4 py-1 rounded-lg' onClick={()=>{
                          navigator.clipboard.writeText(paste.content);
                          toast.success("Copied");
                        }}>Copy</button>

                        <div>
                          {
                            flag ? (
                              <button className='bg-green-500 hover:bg-green-600 px-4 py-1 rounded-lg' onClick={() => setFlag(false)}>Share</button>
                            ) : (
                              <div onClick={()=>setFlag(true)}>
                                <ShareButton/>
                              </div>
                            )
                          }
                        </div>
                      </div>

                    </div>
                  )
                }
              )
          )
        }
      </div>
    </div>
  )
}

export default Paste
