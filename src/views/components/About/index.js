import React from 'react';
import SlidBtn from '../common/SlidBtn';
import AboutImg from '../../assets/about-img.png';
import './index.css';

const About = () => (
  <div className="main">
    <div className="header_title">
      <h1>ABOUT ME</h1>
    </div>
    <div className="home_content about">
      <SlidBtn />
      <div className="home_slid about_slid">
        <div className="container">
          <div className="md-2">
            <img src={AboutImg} className=" about_slid_hero" alt="Not avaliable bad connection" />
          </div>
          <div className="md-1">
            <div className="discription">
              <h4>ABOUT ME</h4>
              <h3>PERSONALE DETAIL</h3>
              <p>
                           You will begin to realise why this exercise is called the
                           Dickens Pattern with reference to the ghost showing
                           Scrooge some different futures.
              </p>
            </div>
            <div className="slid_btn_descover">
              <a href="#">VIEW MORE DETAILS</a>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
);

export default About;
