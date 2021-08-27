import React from 'react';
import classes from '../SmartWatch.module.css';


const ProductDetails = (props) => {

    const colorOptions = props.data.colorOptions.map((item, pos) => {
        const classArr = [classes.ProductImage]
        if (pos === props.currentPreviewImagePos) {
            classArr.push(classes.SelectedProductImage);
        }

        return(
            <img key={pos} className={classArr.join(' ')} src={item.imageUrl} alt={item.styleName} onClick={() => props.onColorOptionClick(pos)}/>
        );
    });

    const featureList = props.data.featureList.map((item, pos) => {
        const classArr = [classes.FeatureItem]

        if (pos === props.currentSelectedFeature) {
            classArr.push(classes.SelectedFeatureItem)
        } 

        return(
            <button onClick={() => props.onFeatureItemClick(pos)} key={pos} className={classArr.join(' ')}>{item}</button>
        )
    })

    return(
        <div className={classes.ProductData}>
        <h2 className={classes.ProductTitle}>{props.data.title}</h2>
        <p className={classes.ProductDescription}>
          {props.data.description}
        </p>
        <h4 className={classes.SectionHeading}>
          Select Color
        </h4>
        <div>
          {colorOptions}
        </div>
        <br/>
        <h4 className={classes.SectionHeading}>
          Features
        </h4>
        <div>
        {featureList}
        </div>
        <button className={classes.PrimaryButton}>
          Buy Now
        </button>
        </div>
    )
}

export default ProductDetails