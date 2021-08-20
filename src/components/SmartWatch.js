import React, { Component } from 'react'
import classes from '../SmartWatch.module.css';

class SmartWatch extends Component {
    render() {
    return (
        <div> 
            <img src={this.props.url} alt="watch band" className={classes.SmartWatchThumbnail} onClick={this.props.handleColorClick}/>
        </div>
        )
    }
}
export default SmartWatch;