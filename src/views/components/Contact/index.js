import React from 'react';
import SlidBtn from '../common/SlidBtn';
import HeaderTitle from '../common/HeaderTitle';
import './index.css';

const Contact = () => (
  <div className="main">
    <HeaderTitle title="CONTACT US" />
    <div className="contact">
      <SlidBtn />
      <div className="contact_form">
        <div className="container">
          <form>
            <div className="contact_left_side">
              <input type="text" name="username" placeholder="Enter your name" />
              <input type="text" name="address" placeholder="Enter your address" />
              <input type="text" name="subject" placeholder="Enter your subject" />
            </div>
            <div className="contact_right_side">
              <textarea col="50" rows="10" placeholder="Enter Message" name="message" maxLength="200" />
              <div className="form_btn">
                <button type="submit">SEND MESSAGE</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

);

export default Contact;