import React, { Component } from 'react';
import './App.css';
import ProductData from './components/ProductData';
import ProductFeature from './components/ProductFeature'
import ProductDetails from './components/ProductDetails'
import classes from './SmartWatch.module.css';
import Logo from './components/Logo'



class App extends Component {
  state = {
    productData: ProductData,
    currentPreviewImage: 'https://imgur.com/iOeUBV7.png',
    showHeartBeatSection: true,
  }

  const onColorOptionClick = () => {

  }

render() {
  return (
    <div className={classes.app}>
      <Logo />
      <div className={classes.MainContainer}>
      <div className={classes.ProductPreview}>
        <ProductFeature currentPreviewImage={this.state.currentPreviewImage} showHeartBeatSection={this.state.showHeartBeatSection} />
      </div>
      <div className={classes.ProductData}>
        <ProductDetails data={this.state.productData} />
      </div>
      </div>
    </div>
  );
  }
}

export default App;
