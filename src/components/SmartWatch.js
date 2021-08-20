import React from 'react'
import classes from '../SmartWatch.module.css';

const SmartWatch = (props) => {
    return (
        <div> 
            <h3>{props.style}</h3>
            <img src={props.url} alt="watch band" className={classes.SmartWatchThumbnail}/>
        </div>
    )
}
export default SmartWatch;