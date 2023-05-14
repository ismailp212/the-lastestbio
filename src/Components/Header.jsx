import React from "react";
import '../Style/Header.css';
import logox from '../images/logo-image/logo.jpg';


function Header(){
    return (

        <div className="header">
            <div className="logo">
                <img src={logox} alt="" />
                <h1>Biomix</h1>
            </div>
            <div className="navbar">
                <div className="nav-links">
                    <ul>
                        <li className="collection-link">Collections</li>
                        <li>Brands</li>
                        <li>New</li>
                        <li>Sales</li>
                    </ul>
                </div>
                <div className="search">
                    <input type="text" placeholder="Search" />
                </div>
                
            </div>
        </div>






    )

}


export default Header;