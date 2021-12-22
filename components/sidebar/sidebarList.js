import React from 'react'
import Link from 'next/link'
import {sidebarData} from "./sidebarData"
import sidebar from "./sidebar.module.css"
import {useRouter} from 'next/router'

function SidebarList() {
    const router = useRouter();

    return (
        <ul className={sidebar.sidebarList}>
        {sidebarData.map((val,key)=> {
            return(
               <Link href = {val.link}><li key = {key} className={`${sidebar.sidebarRow} ${router.pathname == val.link ? sidebar.active : ""}`}  >
                    <div className={sidebar.icon}>{val.icon}</div>
                    <div className={sidebar.title}>{val.title}</div>
                </li>
                </Link>
            )
        })}
        </ul>
    )
}

export default SidebarList
