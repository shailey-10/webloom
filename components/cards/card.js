import React from 'react'
import card from './card.module.css'
import Image from 'next/image'
import CardTypes from './cardTypes'

function Card(props) {
    return (
        <div className={card.card}>
            <div>
            <div className={card.header}>
                <h4>{props.header}</h4>
               {props.intermediate}
                {props.image}
                </div>
            <div className={card.content}>
                <CardTypes type = {props.type} chart = {props.chart} days = {props.days} description = {props.description} images = {props.images}
                name = {props.name} mail = {props.mail} profile={props.profile}/>
                </div>    
            </div>
            </div>
    )
}

export default Card
