import React, { useState } from 'react'
import SideBar from './SideBar';
import Navbar from './Navbar';
import SideBarMobile from './SideBarMobile';
import Overlay from './Overlay';

const DashboardLayout = ({ title, children }) => {
    const [sidebarMobile, setSidebarMobile] = useState(false);

    function toggleSidebar() {
        setSidebarMobile(!sidebarMobile)
    }
    return (
        <>
            <div className='flex '>
                <SideBar />
                {sidebarMobile && <Overlay />}
                {sidebarMobile && <SideBarMobile toggleSidebar={toggleSidebar} />}
                <div className='bg-[#f3f3f7]'>
                    <Navbar title={title} toggleSidebar={toggleSidebar} />
                       {children}
                </div>
            </div>

        </>
    )
}

export default DashboardLayout
