import React from 'react'
import Image from 'next/image'
import DoughnutChart from '../charts/doughnut'

export const cardStatusData = [
    {
        header: 'Works',
        image: <Image src="/dots.svg" width={4} height={20}/>,
        chart: <DoughnutChart activity = '' completed = '50' remaining = '50' covered = '#FFD339' vacant = 'rgba(31, 33, 39, 0.06)' cutout ="83%"/>,
        type: 'status',
        days: "75",
        description: "Works Today"
    },
    {
        header: 'Analytics',
        image: <Image src="/dots.svg" width={4} height={20}/>,
        chart: <DoughnutChart activity = '' completed = '25' remaining = '75' covered = '#FF6D39' vacant = 'rgba(31, 33, 39, 0.06)' cutout ="83%"/>,
        type: 'status',
        days: "310",
        description: "Analytics Today"
    },
    {
        header: 'Statistics',
        image: <Image src="/dots.svg" width={4} height={20}/>,
        chart: <DoughnutChart activity = '' completed = '59' remaining = '41' covered = '#9539FF' vacant = 'rgba(31, 33, 39, 0.06)' cutout ="83%"/>,
        type: 'status',
        days: "75",
        description: "Stats Today"
    },
    {
        header: 'Tasks',
        image: <Image src="/dots.svg" width={4} height={20}/>,
        chart: <DoughnutChart activity = '' completed = '75' remaining = '25' covered = '#3954FF' vacant = 'rgba(31, 33, 39, 0.06)' cutout ="83%"/>,
        type: 'status',
        days: "15",
        description: "Tasks Today"
    }
]
