import React, { useState } from 'react';
import "./Carousel.css";

const Carousel = (props) => {
    let start = props.headerStart;
    let middle = props.headerMiddle;
    let end = props.headerEnd;
    let images = props.headerImages;

    return (
        <>
            {images.map((image, index) => {
                {console.log(start, middle, end, images)}
                if(index == start){
                    return (
                        <li key={index} id="first-image">
                            <img src={image.url} alt={image.description} />
                        </li>
                    )
                }else if(index == middle){
                    return (
                        <li key={index} id="second-image">
                            <img src={image.url} alt={image.description} />
                        </li>
                    )
                }else if(index == end){
                    return (
                        <li key={index} id="third-image">
                            <img src={image.url} alt={image.description} />
                        </li>
                    )
                }
            })};
        </>
    );
};

export default Carousel;