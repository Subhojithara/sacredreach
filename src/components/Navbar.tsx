"use client";

import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  let lastScrollTop = 0;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Detect scroll direction to hide/show navbar
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        // Scroll Down
        setIsVisible(false);
      } else {
        // Scroll Up
        setIsVisible(true);
      }
      lastScrollTop = scrollTop;
    };
    

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`navbar-container ${
        isVisible ? "visible" : "hidden"
      } transition-transform duration-500 ease-in-out`}
    >
      <div className="logo font-black h-10 w-10 justify-center items-center">
        <img
          src="https://ik.imagekit.io/5mjwfcn7d/SacredReach%20Brand%20logo/favicon.ico?updatedAt=1725131073257"
          alt="Logo"
        />
      </div>

      {/* Desktop Menu */}
      <nav className="desktop-menu">
        <a href="#home" className="nav-link">Home</a>
        <a href="#about" className="nav-link">About</a>
        {/* <a href="#festival" className="nav-link">Festival</a> */}
      </nav>

      <a href="#contact" className="contact-button">Contact Us</a>

      {/* Mobile Icon */}
      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="mobile-menu">
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          {/* <a href="#festival" className="nav-link">Festival</a> */}
          <a href="#contact" className="mobile-contact-button">
            Contact Us
          </a>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
