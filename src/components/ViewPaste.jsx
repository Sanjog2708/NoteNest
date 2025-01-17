import { useParams } from 'react-router-dom';
import {useSelector} from 'react-redux'
const ViewPaste = () => {

  const {id} = useParams();
  const allPastes = useSelector((state)=>state.paste.pastes);
  const paste = allPastes.find((p)=>p._id === id);
  return (
  <div className='bg-zinc-900 min-h-[660px] py-5'>
    <div className='flex flex-row gap-10   place-content-evenly '>
      <input type="text"
          className='py-1 text-orange-500 bg-transparent border-[1px] out line-none border-green-200 text-lg font-semibold text-center  rounded-[12px] mt-2 w-[32%]'
          placeholder='Enter title here'
          disabled
          value={paste.title}
          onChange={(e)=>
          setTitle(e.target.value)}
      />
    </div>
    <div className='flex justify-center '>
      <textarea
        className=' rounded-2xl bg-zinc-600 resize-none bg-transparent text-gray-200 text-lg  mt-8 min-w-[650px] h-[520px] p-4'
        value={paste.content}
        placeholder='Enter the content here...'
        disabled
        onChange={(e)=>setValue(e.target.value)}
        rows={20}
      />
    </div>
  </div>
  )
}

export default ViewPaste
