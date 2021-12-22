import React from 'react';
import sidebar from "./sidebar.module.css"
import Image from 'next/image'
import SidebarList from './sidebarList';
import Button from '../form-elements/button';


function Sidebar() {
    return (
        <div className={sidebar.sidebar}>
            <div className={sidebar.logo}>
            <Image src="/logo.png" width={120} height={34}/>
            </div>
           <SidebarList />
            <div className="footer-button">
               <Button image = "/logout.svg" width = "20" height = "20" content ="Logout"/>
            </div>
        </div>
    )
}

export default Sidebar;
