import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <Link to="/" style={{ textDecoration: 'none' }}>
          {' '}
          <h1 className="logo">OMDB DEMO</h1>
        </Link>
      </div>
    </header>
  );
};

export default Header;
