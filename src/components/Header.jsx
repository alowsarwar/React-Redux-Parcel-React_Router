import React from 'react';
import { Link } from 'react-router-dom';
import ParcelLogo from '../img/digrecl.PNG';
import '../scss/app.scss';

const Header = () => (
  <header>
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img width="120" src={ParcelLogo} alt="" />
        </a>
      </div>
      <div>
        <Link to="/">
          <button>home</button>
        </Link>
        <Link to="/about">
          <button>About</button>
        </Link>
        <Link to="/code">
          <button>code</button>
        </Link>
        <Link to="/contact">
          <button>contact</button>
        </Link>
        <Link to="/info">
          <button>info</button>
        </Link>
        <Link to="/test">
          <button>Redux test</button>
        </Link>
      </div>
    </nav>
  </header>
);

export default Header;
