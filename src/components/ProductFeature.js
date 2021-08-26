import React from 'react';
import classes from '../SmartWatch.module.css';
import heart from '../heartbeat.png';


const ProductFeature = (props) => {

    const currentDate = new Date()
    const currentHour = currentDate.getHours();
    const currentMinute = currentDate.getMinutes();

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