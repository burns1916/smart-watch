import React from 'react'

const SmartWatch = (props) => {
    return (
        <div>
            <h3>{props.style}</h3>
            <img src={props.url} alt="watch band"></img>
        </div>
    )
}
export default SmartWatch;