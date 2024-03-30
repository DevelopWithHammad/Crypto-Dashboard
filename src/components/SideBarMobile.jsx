import React from 'react';
import "../index.css";
import { sideBarLink } from '../constants';
import { BiSupport } from "react-icons/bi";
import { RxCrossCircled } from "react-icons/rx";



const SideBarMobile = ({ toggleSidebar }) => {
    return (
        <div className='absolute bg-white z-30 sidebar pt-4 max-w-[256px] h-full shadow-xl'>
            <RxCrossCircled className='ml-auto mr-2 text-2xl' onClick={toggleSidebar} />
            <div className='pt-8'>
                <h1 className='font-Ubuntu px-7 font-bold text-primary'>@HAMMADURREHMAN</h1>
                <div className='px-3 pt-6 h-[85%]'>{sideBarLink.map((item, index) => (
                    <div key={index} className={`cursor-pointer flex items-center gap-3 pl-4 py-3 ${index === 1 ? 'mt-1' : ''}`}>
                        <item.icon className='text-xl' />
                        <p className='font-semibold'>{item.title}</p>
                    </div>
                ))}
                </div>
                <div className='cursor-pointer flex items-center gap-3 px-7 py-3'>
                    <BiSupport className='text-xl' />
                    <p className='font-semibold'>Support</p>
                </div>
            </div>
        </div>
    )
}

export default SideBarMobile
