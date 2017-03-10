import React from 'react';
import { Link } from 'react-router';
import './header.scss';

function Header() {
  return (
    <header className="header">
      <h1 className="header-title">
        <Link to="/">Portfolio Quality</Link>
      </h1>
    </header>
  );
}

Header.propTypes = {};

export default Header;
