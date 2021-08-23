import React, { Component } from 'react';
import './App.css';
import SmartWatch from './components/SmartWatch';
import classes from './SmartWatch.module.css';
import Features from './components/Features';
import logo from './amazon-logo.png';


class App extends Component {
  state = {
    watchBand: 'https://imgur.com/iOeUBV7.png',
    featureSelect: '',
  }

 ProductData = {
    title: 'FitBit 19 - The Smartest Watch',
    description: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor.',
    colorOptions: [
        {
            styleName: 'Black Strap',
            imageUrl: 'https://imgur.com/iOeUBV7.png'
        },
        {
            styleName: 'Red Strap',
            imageUrl: 'https://imgur.com/PTgQlim.png'
        },
        {
            styleName: 'Blue Strap',
            imageUrl: 'https://imgur.com/Mplj1YR.png'
        },
        {
            styleName: 'Purple Strap',
            imageUrl: 'https://imgur.com/xSIK4M8.png'
        },
    ],
    featureList: [
        "Time", "Heart Rate"
    ]
};

// Object.freeze(ProductData); //This line of code just makes your object as a constant. No values can be updated.

handleColorClick = (pos) => {
  this.setState({watchBand: pos});
}

handleFeatureClick = (feature) => {
  this.setState({featureSelect: feature})
}

watches = this.ProductData.colorOptions.map((watch, pos) => {
  return(
    <SmartWatch key={pos} url={watch.imageUrl} handleColorClick={() => {this.handleColorClick(pos)}}/>
  )
})

features = this.ProductData.featureList.map((feature) => {
  return(
  <Features features={feature} handleFeatureClick={() => {this.handleFeatureClick(feature)}}/>
  )
})

render() {
  return (
    <div className={classes.app}>
      {/*<div className={classes.logo}><img src={logo} alt="amazon logo" /></div> */}
      <div className={classes.productDetails}>
      <div className={classes.watchPicture}>
        <img src={this.state.watchBand} className={classes.watchBand} alt="watch band color"/>
      </div>
      <div className={classes.watchInfo}>
        <h2 className={classes.title}>
          {this.ProductData.title}
        </h2>
        <p>
          {this.ProductData.description}
        </p>
        <h4 className={classes.colorSelect}>
          Select Color
        </h4>
        <div className={classes.watches}>
          {this.watches}
        </div>
        <br/>
        {this.features}
        <br/>
        <button className={classes.buyNow}>
          Buy Now
        </button>
      </div>
      </div>
    </div>
  );
  }
}

export default App;
