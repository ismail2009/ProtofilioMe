import React from 'react';
import Facebook from 'react-icons/lib/fa/facebook';
import Instagram from 'react-icons/lib/fa/instagram';
import Twitter from 'react-icons/lib/fa/twitter';
import './index.css';

const Footer = () => (
  <footer>
    <div className="container">

      <div className="foot_right">

        <div className="foot_r_num">
          <i className="material-icons">
      phone_in_talk
          </i>
          <span>416.540.0534</span>
        </div>
        <div className="foot_r_email">
          <i className="material-icons">email</i>
          <span>info@grantburke.com  FREE Quote</span>
        </div>
      </div>
      <div className="foot_left">
        <Facebook />
        <Instagram />
        <Twitter />
      </div>
    </div>
  </footer>
);
export default Footer;
