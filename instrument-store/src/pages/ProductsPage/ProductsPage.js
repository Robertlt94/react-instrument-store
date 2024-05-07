import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./ProductsPage.css";
import NavHeader from '../../components/NavHeader/NavHeader';

const ProductsPage = () => {

    return (
        <div className="product-page">
            <NavHeader />
            <nav>
                {/* <Link to='/'>All</Link>
                <Link to='/guitar'>Guitar</Link>
                <Link to='/piano'>Piano</Link>
                <Link to='/drum'>Drum</Link>
                <Link to='/flute'>Flute</Link>
                <Link to='/harp'>Harp</Link>
                <Link to='/saxophone'>Saxophone</Link>
                <Link to='/trumpet'>Trumpet</Link>
                <Link to='/violin'>Violin</Link> */}  
            </nav>
        </div>
    );
};

export default ProductsPage;