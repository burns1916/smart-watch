import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SmartWatch from './components/SmartWatch'


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


watches = this.ProductData.colorOptions.map((watch, pos) => {
  return(
    <SmartWatch key={pos} style={watch.styleName} url={watch.imgUrl} />
  )
})

render() {
  return (
    <div className="App">
      {this.watches}
    </div>
  );
  }
}

export default App;
