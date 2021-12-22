import React from 'react'
import teamMember from './teamMember.module.css'
function TeamMember(props) {
    return (
        <div className={teamMember.topContainer}>
        <div className={teamMember.header}>
      
        </div>
       
        <div className={teamMember.item}>
          {props.images}
          <div className={teamMember.userContent}>
              <h4>{props.name}</h4>
              <p>{props.mail}</p>
          </div>
          <div className={teamMember.profile}></div>
          <h3 className={teamMember.rating}>{props.profile}</h3>
        </div>
    
    
    </div>
    )
}

export default TeamMember
