import React from 'react'
import classes from '../SmartWatch.module.css';

const SmartWatch = (props) => {
    return (
        <div onClick={() => props.handleColorClick(props.key)}> 
            <img src={props.url} alt="watch band" className={classes.SmartWatchThumbnail}/>
        </div>
    )
}
export default SmartWatch;