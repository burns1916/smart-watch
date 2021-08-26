import React from 'react';
import classes from '../SamrtWatch.module.css';
import heart from '../heartbeat.svg';


const ProductFeature = (props) => {

    const currentHour = new Date().getHours() > 9 ? new Date().getHours() : '0' + new Date().getHours();
    const currentMinute = new Date().getMinutes() > 9 ? new Date.getMinutes() : '0' + new Date().getMinutes();

    return(
        <div className={classes.featureSection}>
            <img src={heart} alt="heart" />
            <div className={classes.timeSection}>
                <p>{`${currentHour}:${currentMinute}`}</p>
            </div>
            <div>
                <i className={classes.heartBeat}>
                    <p>80</p>
                </i>
            </div>
        </div>
    )
}

export default ProductFeature