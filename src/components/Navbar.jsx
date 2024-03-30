import React, { useState } from 'react';
import { PiUserCircle } from "react-icons/pi";
import { FaBars } from "react-icons/fa";


const Navbar = ({ title, toggleSidebar }) => {
  const [menu, setMenu] = useState(false);

  function toggleMenu() {
    setMenu(!menu)
  }

  return (
    <div className='h-32 bg-white lg:h-16 w-[1123px] grow flex items-center justify-between px-44 lg:px-28 shadow-md'>
      <div className='flex items-center gap-4'>
        <FaBars className='text-5xl lg:text-xl md:hidden' onClick={toggleSidebar} />
        <h1 className='font-semibold text-5xl lg:text-2xl'>{title}</h1>
      </div>
      <button className='relative' onClick={toggleMenu}>
        <PiUserCircle className='text-7xl lg:text-4xl cursor-pointer' />
        <div className={`bg-white menu absolute z-5 !-left-44 top-14 w-48 py-1 border border-gray-100 shadow-md ${!menu ? 'hidden' : 'block'}`}>
          <div className='cursor-pointer hover:bg-gray-100 px-4 py-2 text-left'>Support</div>
          <div className='cursor-pointer hover:bg-gray-100 px-4 py-2 text-left'>Logout</div>
        </div>
      </button>
    </div>
  )
}

export default Navbar
