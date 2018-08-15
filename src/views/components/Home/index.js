import React from 'react';

import SlidBtn from '../common/SlidBtn';
import image from '../../assets/hero-img.png';
import './index.css';

const Home = () => (

  <div className="home_content">
    <SlidBtn />
    <div className="home_slid">
      <div className="container">
        <div className="md-1">
          <div className="discription">
            <h4>THIS IS ME</h4>
            <h3>ISMAIL SALAH AL-SALEH</h3>
            <p>
                         You will begin to realise why this exercise is called the
                         Dickens Pattern with reference to the ghost showing
                         Scrooge some different futures.
            </p>
          </div>
          <div className="slid_btn_descover">
            <a href="#">DESCOVER NOW</a>
          </div>
        </div>
        <div className="md-2">
          <img src={image} className="home_hero" alt="Not avaliable bad connection" />
        </div>
      </div>
    </div>
  </div>

);
export default Home;
