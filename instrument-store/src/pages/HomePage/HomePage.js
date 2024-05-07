import React from 'react';
import { Link } from 'react-router-dom';
import Header from "../../components/Header/Header";
import "./HomePage.css";

const Home = ({props}) => {
        
    return (
        <div>
            <Header props={props}/>
            <nav className='home-navigation'>
                <Link to='/products' id='products-nav'>
                    <div className='effect-div'>
                        <h1>Products</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet nisl suscipit adipiscing bibendum est ultricies integer quis. Feugiat nibh sed pulvinar proin gravida hendrerit.</p>
                    </div>
                </Link>
                <Link to='/about' id='about-nav'>
                    <div className='effect-div'>
                        <h2>About</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget felis eget nunc lobortis mattis aliquam faucibus purus in.</p>
                    </div>
                </Link>
                <Link to='/contact-us' id='contact-us-nav'>
                    <div className='effect-div'>
                        <h2>Contact Us</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </Link>
                <Link to='/faq' id='faq-nav'>
                    <div className='effect-div'>
                        <h2>FAQ</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </Link>
            </nav>
        </div>
    )
}

export default Home;