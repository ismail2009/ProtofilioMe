import React from 'react';
import './index.css';

const Header = () => (
  <div className="Navbar">
    <div className="container">
      <div className="Navbar_logo">
        <span>
          PERSONAL
        </span>
      </div>
      <nav className="Navbar_nav">
        <div className="Navbar_nav_item">
          <span><a href="#Home">HOME</a></span>
          <div className="Navbar_nav_item_decoration " />
        </div>
        <div className="Navbar_nav_item">
          <span><a href="#About-me">ABOUT</a></span>
          <div className="Navbar_nav_item_decoration " />
        </div>
        <div className="Navbar_nav_item">
          <span><a href="#Experiance">SERVICE</a></span>
          <div className="Navbar_nav_item_decoration " />
        </div>
        <div className="Navbar_nav_item">
          <span><a href="#Work">PROTFILIO</a></span>
          <div className="Navbar_nav_item_decoration " />
        </div>
        <div className="Navbar_nav_item">
          <span><a href="#Contact">CONTACT</a></span>
          <div className="Navbar_nav_item_decoration point" />
        </div>
      </nav>
    </div>
  </div>
);

export default Header;
