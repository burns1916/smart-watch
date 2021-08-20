import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SmartWatch from './components/SmartWatch'
import classes from "./SmartWatch.module.css"


class App extends Component {

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
  alert("Color Selected at" + pos)
}

watches = this.ProductData.colorOptions.map((watch, pos) => {
  return(
    <SmartWatch key={pos} url={watch.imageUrl} handleColorClick={this.handleColorClick}/>
  )
})

features = this.ProductData.featureList.map((feature) => {
  return(
  <button className={classes.featureButton}>{feature}</button>
  )
})

render() {
  return (
    <div className={classes.app}>
      <div className={classes.watchPicture}>
      
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
  );
  }
}

export default App;
