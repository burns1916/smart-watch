import React from 'react';
import classes from '../SmartWatch.module.css';


const ProductDetails = (props) => {

    const colorOptions = props.data.colorOptions.map((item, pos) => {
        const classArr = [classes.ProductImage]
        if (pos === 0) {
            classArr.push(classes.SelectedProductImage);
        }

        return(
            <img key={pos} className={classArr.join(' ')} src={item.imageUrl} alt={item.styleName} />
        );
    });

    const featureList = props.data.featureList.map((item, pos) => {
        const classArr = [classes.featureItem]

        if (pos === 0) {
            classArr.push(classes.SelectedFeatureItem)
        }

        return(
            <button key={pos} className={[classArr].join(' ')}>{item}</button>
        )
    })

    return(
        <div className={classes.ProductData}>
        <h2 className={classes.title}>{props.data.title}</h2>
        <p className={classes.ProductDescription}>
          {props.data.description}
        </p>
        <h4 className={classes.colorSelect}>
          Select Color
        </h4>
        <div className={classes.watches}>
          {colorOptions}
        </div>
        <br/>
        <h4 className={classes.colorSelect}>
          Features
        </h4>
        <div>
        {featureList}
        </div>
        <br/>
        <button className={classes.buyNow}>
          Buy Now
        </button>
        </div>
    )
}

export default ProductDetails