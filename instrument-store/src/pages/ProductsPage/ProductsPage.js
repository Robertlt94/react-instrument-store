import React, {useEffect} from "react";
import { Route, Routes, Link, useParams } from "react-router-dom";
import "./ProductsPage.css";
import Header from "../../components/Header/Header";
import ProductList from "../../components/ProductList/ProductList";

const ProductsPage = ({cart, products, addToFavorites, removeFromFavorites, addToCart, removeFromCart}) => {
    const category = useParams();
    
    return (
        <div className="product-page">
            <Header cart={cart} removeFromCart={removeFromCart} />
            <div className="product-type" >
                <nav>
                    <Link to='/products'>All</Link>
                    <Link to='/products/favorites'>My Favorites</Link>
                    <Link to='/products/guitar'>Guitar</Link>
                    <Link to='/products/piano'>Piano</Link>
                    <Link to='/products/drum'>Drum</Link>
                    <Link to='/products/flute'>Flute </Link>
                    <Link to='/products/harp'>Harp</Link>
                    <Link to='/products/saxophone'>Saxophone</Link>
                    <Link to='/products/trumpet'>Trumpet</Link>
                    <Link to='/products/violin'>Violin</Link>
                </nav>
            </div>
            {
                category["*"] === '' ? 
                    <ProductList products={products} addToCart={addToCart} addToFavorites={addToFavorites} removeFromFavorites={removeFromFavorites}/>
                    :
                    category["*"] === "favorites" ? 
                        <ProductList products={products.filter(item => item.favorite)} addToCart={addToCart} addToFavorites={addToFavorites} removeFromFavorites={removeFromFavorites}/>
                        :
                        <ProductList products={products.filter(item => item.category === category["*"])} addToCart={addToCart} addToFavorites={addToFavorites} removeFromFavorites={removeFromFavorites}/>
            }
            <Routes>
                <Route path="/products/:category" element={<ProductList products={products} addToCart={addToCart} addToFavorites={addToFavorites} removeFromFavorites={removeFromFavorites}/>} exact/>
            </Routes>
        </div>
    );
};

export default ProductsPage;