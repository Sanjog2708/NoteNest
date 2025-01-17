import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import { addToPastes, updateToPastes } from '../redux/pasteSlice';
import toast from 'react-hot-toast';


const Home = () => {
    const [title,setTitle] = useState('');
    const [value,setValue] = useState('');
    const [searchParams,setSearchParams] = useSearchParams();
    const pasteId = searchParams.get('pasteId');
    const dispatch = useDispatch();
    const allPastes = useSelector((state)=>state.paste.pastes);
    useEffect(() => {
      if(pasteId){
        const paste = allPastes.find((p)=>p._id === pasteId);
        setTitle(paste.title);
        setValue(paste.content);
      }
    }, [pasteId])
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    function createPaste(){
  
      if(!title){
        toast.error("Please Enter Title") ;
        return;
      }
      if(!value){
        toast.error("Please Enter Content") ;
        return;
      }
      const paste = {
        title:title,
        content:value,
        _id:pasteId || Date.now().toString(36),
        createAt:formattedDate
      }

    if(pasteId){
      //Update
      dispatch(updateToPastes(paste));
    }
    else{
      //Create
      dispatch(addToPastes(paste));
    }
    //After creation or updation of paste
    setTitle('');
    setValue('');
    setSearchParams({})
  }
  return (  
    <div className='bg-zinc-900 min-h-[660px]'> 
    <div className='flex flex-col gap-10 text-gray-300 justify-center items-center p-5'>
          <input type="text" 
              
              className='p-2 bg-zinc-800 border-2 border-gray-700 outline-none rounded-lg mt-2 w-[31%] pl-5 h-9'
              placeholder='Enter title here'
              value={title}
              onChange={(e)=>
              setTitle(e.target.value)}
              required
          />
           <div className='w-[460px]'>
              <textarea
                className='w-[100%] h-96 p-4 resize-none  bg-zinc-800 border-2 border-gray-700 outline-none rounded-lg'
                value={value}
                required
                placeholder='Enter the content here...'
                onChange={(e)=>setValue(e.target.value)}
                rows={20}
              />
           </div>
           <button className='mt-2 border-[1px] border-green-400 hover:bg-green-700 w-[25%] px-3 py-2 rounded-lg bg-green-600' onClick={createPaste}> 
            {
              pasteId ? 'Update My Paste' : 'Create My Paste'
            }
          </button>
    </div>
   
    </div>
  )
}

export default Home
