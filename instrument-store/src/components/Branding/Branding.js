import React from 'react';
import './Branding.css';
import { Link } from 'react-router-dom';

const Branding = () => {

    return (
        <div className='dancing-script-header'>
            <nav>
                <Link to="/" style={{textDecoration: "none"}} ><h1>Instrument Store</h1></Link>
            </nav>
        </div>
    );
};

export default Branding;