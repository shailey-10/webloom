import React from 'react'
import header from './header.module.css'
import Image from 'next/image'

function MainHeader() {
    return (
        <div className={header.mainHeader}>
            <div className={header.tile}>
            <h2>Dashboard!</h2>
            </div>
            <div className={header.navItems}>
            <Image src='/search.svg' width={22} height={22} />
            <Image src='/notif.svg' width={22} height={22} />
            <Image src='/avatar.svg' width={40} height={40} />
            </div>
        </div>
    )
}

export default MainHeader
