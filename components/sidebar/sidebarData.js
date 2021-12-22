import React from 'react'
import Image from 'next/image'

export const sidebarData = [
    {
        title: 'Dashboard',
        icon: <Image src="/dashboard.svg" width={28} height={25}/>,
        link: '/'
    },
    {
        title: 'My Team',
        icon: <Image src="/team.svg" width={28} height={25}/>,
        link: '/team'
    },
    {
        title: 'Task',
        icon: <Image src="/task.svg" width={28} height={25}/>,
        link: '#'
    },
    {
        title: 'Calendar',
        icon: <Image src="/calendar.svg" width={28} height={25}/>,
        link: '#'
    },
    {
        title: 'Report',
        icon: <Image src="/report.svg" width={28} height={25}/>,
        link: '#'
    },
    {
        title: 'Settings',
        icon: <Image src="/settings.svg" width={28} height={25}/>,
        link: '#'
    }
]
