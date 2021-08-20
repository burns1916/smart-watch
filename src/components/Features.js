import React, { Component } from 'react';
import classes from '../SmartWatch.module.css'

class Features extends Component {
    render() {
    return(
        <button className={classes.featureButton} onClick={this.props.handleFeatureClick}>{this.props.features}</button>
        )
    }
}

export default Features