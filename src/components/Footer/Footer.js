import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <span>
        Copyright &copy; {new Date().getFullYear()}. All Rights
        Reserved
      </span>
    </div>
  );
};

export default Footer;
