import React from 'react';
import classes from '../SmartWatch.module.css';
import heart from '../heartbeat.png';


const ProductPreview = (props) => {

    const currentDate = new Date()
    const currentHour = currentDate.getHours();
    const currentMinute = currentDate.getMinutes();

    return(
        <div className={classes.ProductPreview}>
            <img src={props.currentPreviewImage} alt="Product Preview" />
            {
                props.currentSelectedFeature === 1 ? 
                <div className={classes.HeartBeatSection}>
                <img src={heart} />
                <i>
                    <p>80</p>
                </i>
                </div> 
                
                : 
                
                <div className={classes.TimeSection}>
                <p>{`${currentHour}:${currentMinute}`}</p>
                </div>
            }
        </div>
    )
}

export default ProductPreview