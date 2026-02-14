import React from 'react';
import { Link } from 'react-router-dom';
import { FaLeaf, FaHome, FaSeedling } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <FaLeaf className="logo-icon" />
          <span>Organic Guide</span>
        </Link>
        
        <div className="nav-menu">
          <Link to="/" className="nav-link">
            <FaHome className="nav-icon" />
            Home
          </Link>
          <Link to="/crops" className="nav-link">
            <FaSeedling className="nav-icon" />
            Crops
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;