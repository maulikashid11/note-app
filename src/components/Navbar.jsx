import React from 'react'

export default function Navbar() {
  return (
    <nav className='bg-purple-500 text-white flex justify-between items-center px-2 py-2 '>
        <div className="logo font-bold text-xl">MyNotes</div>
        <ul className='flex text-sm px-3'>
            <li className='hover:font-bold cursor-pointer duration-200 transition-all mx-3'>Home</li>
            <li className='hover:font-bold cursor-pointer duration-200 transition-all mx-3'>Blogs</li>
            <li className='hover:font-bold cursor-pointer duration-200 transition-all mx-3'>Pricing</li>
        </ul>
    </nav>
  )
}
