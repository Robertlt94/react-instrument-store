import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./ProductsPage.css";
import NavHeader from "../../components/NavHeader/NavHeader";
import ProductList from "../../components/ProductList/ProductList";

const ProductsPage = ({ cart, products, addToCart }) => {

    return (
        <div className="product-page">
            <NavHeader />
            <div className="product-type" >
                <nav>
                    <Link to='/products'>All</Link>
                    <Link to='/products/guitar'>Guitar</Link>
                    <Link to='/products/piano'>Piano</Link>
                    <Link to='/products/drum'>Drum</Link>
                    <Link to='/products/flute'>Flute</Link>
                    <Link to='/products/harp'>Harp</Link>
                    <Link to='/products/saxophone'>Saxophone</Link>
                    <Link to='/products/trumpet'>Trumpet</Link>
                    <Link to='/products/violin'>Violin</Link>
                </nav>
            </div>
            <ProductList cart={cart} products={products} addToCart={addToCart} />
            {/* <Routes>
                <Route path="/products" element={<ProductList cart={cart} products={products} addToCart={addToCart} />} />
                <Route path="/products/guitar" element={<ProductList cart={cart} products={products.filter(product => product.type === "guitar" )} addToCart={addToCart} />} /> */}
                {/* <Route path="piano" element= /> */}
                {/* <Route path="drum" element={} />
                <Route path="flute" element={} />
                <Route path="harp" element={} />
                <Route path="saxophone" element={} />
                <Route path="trumpet" element={} />
                <Route path="violin" element={} /> */}
            {/* </Routes> */}
        </div>
    );
};

export default ProductsPage;