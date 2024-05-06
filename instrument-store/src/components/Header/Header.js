import React, {useState} from 'react';
import './Header.css'
import Carousel from './Carousel/Carousel';
import Branding from './Branding/Branding';


const Header = ({props}) => {

    return (
        <div className='header'>
            <Carousel {...props}/>
            <Branding />
            <div id="previous-header-btn" onClick={() => {props.previousHeaderImage()}}>
                <button alt="previous">&#8592;</button>
            </div>
            <div id="next-header-btn" onClick={() => {props.nextHeaderImage()}}>
                <button alt="next">&#8594;</button>
            </div>
        </div>
    );
};

export default Header;