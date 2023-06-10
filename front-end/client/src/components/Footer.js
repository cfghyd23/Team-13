import React from 'react';
import { FaInstagram, FaFacebook, FaLinkedinIn } from 'react-icons/fa';
import '../style/Footer.css';
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer>
        <div className="footer-left">
          <a href="/">About Us</a>
          <a href="/">Contact Us</a>
          <Link to="/Eligibility">Eligibility Criteria</Link>
        </div>
      <div className="social-icons">
        <a href="https://www.instagram.com/your_instagram_page" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon" />
        </a>
        <a href="https://www.facebook.com/your_facebook_page" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="icon" />
        </a>
        <a href="https://www.facebook.com/your_facebook_page" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn className="icon" />
        </a>
      </div>
      {/* <div className='footp'>
      <p>&copy; 2023 Blood Warriors. All rights reserved.</p>
      </div> */}
      
    </footer>
  );
};

export default Footer;

