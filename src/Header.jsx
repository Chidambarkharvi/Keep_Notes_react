import React from 'react';
import logo from './images/logo.png';

const  Header =() => {
    return (
    <>
    <div className="header">
        <img  src={logo}  alt="logo"  className="logo" style={{
            width:50, height:50
        }} />
        <h2 className="appname">keek keep note</h2> 
    

    </div>

    </>

    );

}

export default Header;
