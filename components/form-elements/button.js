import React from 'react'
import button from "./button.module.css"
import Image from 'next/image'

function Button(props) {
    return (
        <div className={button.button}>
        <Image src={props.image} width={props.width} height={props.height}/>
        <p>{props.content}</p>
        </div>
    )
}

export default Button
