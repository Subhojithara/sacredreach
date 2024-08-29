"use client";

import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar-container">
      <div className="logo font-black">LOGO</div>
      
      {/* Desktop Menu */}
      <nav className="desktop-menu">
        <a href="#home" className="nav-link">Home</a>
        <a href="#about" className="nav-link">About</a>
        <a href="#festival" className="nav-link">Festival</a>
      </nav>
      
      <a href="#contact" className="contact-button">
        Contact Us
      </a>

      {/* Mobile Icon */}
      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="mobile-menu">
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#festival" className="nav-link">Festival</a>
          <a href="#contact" className="mobile-contact-button">
            Contact Us
          </a>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
