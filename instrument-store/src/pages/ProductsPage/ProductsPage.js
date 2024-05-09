import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./ProductsPage.css";
import NavHeader from "../../components/NavHeader/NavHeader";
import ProductList from "../../components/ProductList/ProductList";

// const ProductsPage = ({ cart, products, addToCart, quantity, addQuantity, minusQuantity }) => {

const ProductsPage = ({props}) => {

    return (
        <div className="product-page">
            <NavHeader />
            <div className="product-type" >
                <nav>
                    <Link to='/products'>All</Link>
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
            {/* {console.log(props.products.filter(product => product.category === 'Guitar'))} */}
            {/* <ProductList cart={props.cart} products={props.products} addToCart={props.addToCart} quantity={props.quantity} addQuantity={props.addQuantity} minusQuantity={props.minusQuantity} /> */}
            {/* <ProductList cart={props.cart} products={props.products} addToCart={props.addToCart} quantity={props.quantity} addQuantity={props.addQuantity} minusQuantity={props.minusQuantity} /> */}
            <Routes>
                <Route path="/products" element={<ProductList cart={props.cart} products={props.products} addToCart={props.addToCart} quantity={props.quantity} addQuantity={props.addQuantity} minusQuantity={props.minusQuantity} />} exact/>
                <Route path="/products/guitar" element={<ProductList cart={props.cart} products={props.products.filter(product => product.category === 'Guitar')} addToCart={props.addToCart} quantity={props.quantity} addQuantity={props.addQuantity} minusQuantity={props.minusQuantity} />} exact />
                {/* <Route path="/products/piano" element={<ProductList cart={cart} products={products.filter(product => product.type === "Piano" )} addToCart={addToCart} quantity={quantity} />} exact />
                <Route path="/products/drum" element={<ProductList cart={cart} products={products.filter(product => product.type === "Drumr" )} addToCart={addToCart} quantity={quantity} />} exact />
                <Route path="/products/flute" element={<ProductList cart={cart} products={products.filter(product => product.type === "Flute" )} addToCart={addToCart} quantity={quantity} />} exact />
                <Route path="/products/harp" element={<ProductList cart={cart} products={products.filter(product => product.type === "Harp" )} addToCart={addToCart} quantity={quantity} />} exact />
                <Route path="/products/saxophone" element={<ProductList cart={cart} products={products.filter(product => product.type === "Saxophone" )} addToCart={addToCart} quantity={quantity} />} exact />
                <Route path="/products/trumpet" element={<ProductList cart={cart} products={products.filter(product => product.type === "Trumpet" )} addToCart={addToCart} quantity={quantity} />} exact />
                <Route path="/products/violin" element={<ProductList cart={cart} products={products.filter(product => product.type === "Violin" )} addToCart={addToCart} quantity={quantity} />} exact /> */}
            </Routes>
        </div>
    );
};

export default ProductsPage;