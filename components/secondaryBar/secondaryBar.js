import React from 'react'
import secondaryBar from './secondaryBar.module.css'
import Image from 'next/image'
import DoughnutChart from '../charts/doughnut'

function SecondaryBar() {
    return (
        <div className={secondaryBar.sidebar}>
            <div className={secondaryBar.main}>
                <Image src="/logo.svg" width ={55} height = {55} />
                <h2>Nxt_UXUI</h2>
                <h5>A designer team</h5>
                <p>nxt.uxui@gmail.com</p>
                <hr />
            </div>
            <div className={secondaryBar.graph}>
                <div className={secondaryBar.settings}>
                    <Image src = "/set.svg" width={25} height={25} />
                </div>
                <div className={secondaryBar.graphSlider}>
                    <div className={secondaryBar.arrow}>
                    <Image src="/al.svg" width ={20} height = {20} />
                    </div>
                <div className={secondaryBar.circle}>
            <DoughnutChart circle = "65" completed = '75' remaining = '25' covered = '#3954FF' vacant = 'rgba(31, 33, 39, 0.06)' cutout = "90%" />
            </div>
            <div className={secondaryBar.arrow}>
            <Image src="/ar.svg" width ={20} height = {20} />
                    </div>
            </div>
            </div>
            <div className={secondaryBar.ceo}>
                <Image src='/ceo.svg' width={70} height={70} />
                <div className={secondaryBar.ceoContent}>
                    <h4> Alina Endorson </h4>
                    <p>CEO and Team Leader</p>
                </div>
            </div>
            <div className={secondaryBar.members}>
                <h4>Total Team Member</h4>
            <div className={secondaryBar.strength}>
                <h1>25</h1>
                <div className={secondaryBar.chart}>
                    <DoughnutChart completed = '25' remaining = '75' vacant = '#3954FF' covered = '#FFD339' cutout = "0%" />
                </div>
            </div>
            </div>
        </div>
    )
}

export default SecondaryBar
