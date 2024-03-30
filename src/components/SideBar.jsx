import React from 'react';
import { sideBarLink } from '../constants';
import { NavLink } from 'react-router-dom';


const SideBar = () => {
    return (
        <div className='relative hidden md:block    pt-14 max-w-[256px] shadow-xl'>
            <h1 className='font-Ubuntu px-7 font-bold text-primary'>@HAMMADURREHMAN</h1>
            <div className='px-3 pt-6 h-[85%]'>{sideBarLink.map((item, index) => (
                <NavLink to={item.link} key={index} className={`cursor-pointer flex items-center gap-3 pl-4 py-3 ${index === 1 ? 'mt-1' : ''} ${(e) => {return e.isActive ? "bg-blue-200" : ""}}`}>
                    <item.icon className='text-xl' />
                    <p className='font-semibold'>{item.title}</p>
                </NavLink>
            ))}
            </div>
        </div>
    )
}

export default SideBar
