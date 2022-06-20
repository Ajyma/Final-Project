import React from "react";
import './Dot.scss'



const Dot = ({index, sliderIndex}) => {
    return (
        <div  key={index} className={sliderIndex === index + 1 ? 'dotIcon dotActive' : 'dotIcon'}></div>
    )
}

export default Dot;
