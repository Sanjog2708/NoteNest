import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='bg-zinc-900 py-5 flex text-white '>
      
      <div className='flex rounded-full items-center justify-center '>
        <img className='h-10 w-10 rounded-full' src="https://png.pngtree.com/png-vector/20241120/ourmid/pngtree-note-paper-yellow-colored-png-image_14146189.png" alt="" />
        <h3 className='text-2xl font-semibold text-gray-400'>NoteNest</h3>
      </div>

      <div className= 'mx-96 flex w-[500px] justify-between  items-center'>
        <NavLink to={'/'} className='border-[1px] border-blue-900 hover:bg-blue-800 px-9 py-2 rounded-md bg-blue-700 outline-none'>
          Home
        </NavLink>
        <NavLink to={'/pastes'} className="border-[1px] border-blue-900 hover:bg-blue-800 px-9 py-2 rounded-md bg-blue-700 outline-none">
          Pastes
        </NavLink>
      </div>
      

    </div>
  )
}

export default Navbar
