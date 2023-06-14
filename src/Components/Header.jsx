import React, { useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import '../Style/Header.css';
import logox from '../images/logo-tharaphi.jpeg';

function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";



  return (
    <div className={`header ${isHomePage ? "transparent" : ""}`}>
      <Link to="/" className="logo">
        <div className="logo">
          <img src={logox} alt="" />
          <h1>THERAPIES</h1>
        </div>
      </Link>
      <div className="navbar">
        <div className="nav-links">
          <ul>
            <li><Link to="/" className="home-link">Accueil</Link></li>
            <li><Link to="/produits">Produits</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="search">
          <input type="text" placeholder="Search" />
        </div>
      </div>
    </div>
  );
}

export default Header;
