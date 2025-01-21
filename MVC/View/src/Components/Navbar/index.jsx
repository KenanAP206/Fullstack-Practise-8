import React, { useState, useEffect } from 'react'
import './Navbar.css'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import { FaBars } from "react-icons/fa6";
import { NavLink } from 'react-router';
function Index() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) { 
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <nav className={`navbar ${scrolling ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-container">
          <a href="/" className="navbar-logo">Banker</a>
          <ul className="navbar-menu">
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><NavLink to='/add'>Add</NavLink></li>
            <li><NavLink to='/wishlist'>Wishlist</NavLink></li>
            <FaFacebookF/>
            <FaTwitter/>
            <FaLinkedinIn/>
            <FaBars className='res'/>

          </ul>
   
        </div>
      </nav>
    </div>
  )
}

export default Index
