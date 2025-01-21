import React, { useState } from 'react';
import './Navbar.css';
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Index() {



  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <a href="/" className="navbar-logo">Banker</a>
          <ul >
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
            <FaFacebookF/>
            <FaTwitter/>
            <FaLinkedinIn/>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Index;
