import React from 'react';
import classes from '../SmartWatch.module.css';
import heart from '../heartbeat.png';


const ProductFeature = (props) => {

    const currentHour = new Date().getHours() > 9 ? new Date().getHours() : '0' + new Date().getHours();
    const currentMinute = new Date().getMinutes() > 9 ? new Date.getMinutes() : '0' + new Date().getMinutes();

    return(
        <div className={classes.featureSection}>
            <img src={props.currentPreviewImage} alt="Product Preview" />
            {
                props.showHearBeatSection ? 
                <div>
                <i className={classes.heartBeat}>
                    <p>80</p>
                </i>
                </div> 
                
                : 
                
                <div className={classes.timeSection}>
                <p>{`${currentHour}:${currentMinute}`}</p>
                </div>
            }
        </div>
    )
}

export default ProductFeature