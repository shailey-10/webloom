import React, { Fragment } from 'react'
import {userData} from './userData'
import topPerformer from './topPerformer.module.css'

function TopPerformerList(props) {
    const slicedArray = userData.slice(0, 4);
        return (
            <Fragment>
                <div className={topPerformer.mainSection}>
            <ul className={topPerformer.topList}>
            {slicedArray.map((val,key)=> {
                return(
                   
                  <div className={topPerformer.topContainer}>
                      <li>
                      <div className={topPerformer.item}>
                        {val.image}
                        <div className={topPerformer.userContent}>
                            <h4>{val.name}</h4>
                            <p>{val.profile}</p>
                        </div>
                        <p className={topPerformer.rating}>{val.rating}</p>
                      </div>
                  
                  </li>
                  </div>
                  
                )
            })}
            </ul>
            </div>
            </Fragment>
        )
    }


export default TopPerformerList
