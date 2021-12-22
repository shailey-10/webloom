import React from 'react'
import Card from '../cards/card';
import {cardStatusData} from '../cards/cardStatusData';
import card from '../cards/card.module.css'

function StatusList() {
    return (
        <ul className={card.statusList}>
        {cardStatusData.map((val,key)=> {
            return(
                <li key = {key} >
               <Card type = "status" image = {val.image} header = {val.header}
                chart = {val.chart} days = {val.days} description = {val.description}/>
                </li>
            )
        })}
        </ul>
    )
}
export default StatusList
