import React, { Fragment } from 'react'
import BarChart from '../charts/bar'
import LineChart from '../charts/lineChart'
import TopPerformerList from '../top performers/topPerformerList'
import card from './card.module.css'
import TeamMember from '../team/teamMember'
import Status from '../status/status'

function CardTypes(props) {
    if (props.type == 'status') {
        return (
            <Status chart ={props.chart} days ={props.days} description = {props.description} />
       
        )
      }else if (props.type == 'bar') {
         return <BarChart />
      } else if (props.type == 'line') {
        return <LineChart />
     }   
    else if (props.type == 'top') {
        return <TopPerformerList />
     } else if (props.type == 'team') {
        return(
            <TeamMember images = {props.images} name ={props.name} mail ={props.mail} profile ={props.profile}/>
        )
     }
        else{
    return null}
}

export default CardTypes
