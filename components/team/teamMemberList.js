import React, { Fragment } from 'react'
import { userData } from '../top performers/userData'
import teamMember from './teamMember.module.css'
import Card from '../cards/card'

function TeamMemberList(props) {
   
        return (
            <Fragment>
            <ul className={teamMember.teamList}>
            {userData.map((val,key)=> {
                return(              
                    <li key = {key} >
                    <Card type = "team" images = {val.image} name = {val.name} mail = {val.mail} profile={val.profile}/>
                     </li>
                )
            })}
            </ul>
            </Fragment>
        )
    }


export default TeamMemberList
