import React, {useState} from 'react';
import './LandingPageHeader.css'
import Carousel from '../Carousel/Carousel';
import Branding from '../Branding/Branding';


const LandingPageHeader = ({props}) => {

    return (
        <div className='header'>
            <Carousel {...props}/>
            <Branding />
            <div id="previous-header-btn" onClick={() => {props.previousImage()}}>
                <button alt="previous">&#8592;</button>
            </div>
            <div id="next-header-btn" onClick={() => {props.nextImage()}}>
                <button alt="next">&#8594;</button>
            </div>
        </div>
    );
};

export default LandingPageHeader;