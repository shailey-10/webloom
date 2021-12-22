import React, { Fragment } from 'react'
import intermediate from './intermediate.module.css'

function Intermediate(props) {
    if (props.type == 'status') {
        return null
        
      }else if (props.type == 'bar') {
         return(
             <div className = {intermediate.intermediate}>
                    <div className = {intermediate.blue}>    
                    </div>
                    <p>Recieved</p>
                    <div className = {intermediate.yellow}>    
                    </div>
                    <p>Yellow</p>
                    <div className={intermediate.dropdown}>
                    <select name="time" id="time">
                        <option value="6 Months">6 Months</option>
                        <option value="9 Months">9 Months</option>
                        <option value="1 Year">1 Year</option>
                        <option value="2 Years">2 Years</option>
                    </select>
                    </div>
             </div>
         )
      } else if (props.type == 'line') {
        return  (
            <div className = {intermediate.intermediateLine}>
                   <div className={intermediate.dropdown}>
                   <select name="time" id="time">
                       <option value="6 Months">6 Months</option>
                       <option value="9 Months">9 Months</option>
                       <option value="1 Year">1 Year</option>
                       <option value="2 Years">2 Years</option>
                   </select>
                   </div>
            </div>
        )
     } 
        else{
    return null}
}

export default Intermediate
