import React from 'react'
import card from '../cards/card.module.css'

function Status(props) {
    return (
        <div className={card.chartContents}>
        <div className= {card.chart}>
                {props.chart}
            </div>
            <div className= {card.todaysStatus}>
                <h4>{props.days}</h4>
                <p>{props.description}</p>
            </div>
            </div>
    )
}

export default Status
