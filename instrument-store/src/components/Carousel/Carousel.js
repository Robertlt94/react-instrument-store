import React, { useState } from 'react';
import "./Carousel.css";

const Carousel = (props) => {
    let start = props.firstImage;
    let middle = props.secondImage;
    let end = props.thirdImage;
    let images = props.images;

    return (
        <>
            {images.map((image, index) => {
                if(index === start){
                    return (
                        <li key={index} id="first-image">
                            <img src={image.url} alt={image.description} />
                        </li>
                    )
                }else if(index === middle){
                    return (
                        <li key={index} id="second-image">
                            <img src={image.url} alt={image.description} />
                        </li>
                    )
                }else if(index === end){
                    return (
                        <li key={index} id="third-image">
                            <img src={image.url} alt={image.description} />
                        </li>
                    )
                }
            })}
        </>
    );
};

export default Carousel;