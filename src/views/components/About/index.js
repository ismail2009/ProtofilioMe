import React from 'react';
import SlidBtn from '../common/SlidBtn';
import AboutImg from '../../assets/about-img.png';
import './index.css';
import HeaderTitle from '../common/HeaderTitle';

const About = () => (
  <div className="main">
    <HeaderTitle title="ABOUT ME" />
    <div className="about row">
      <SlidBtn />
      <div className=" about_slid">
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
    <div className="about_detail">
      <div className="container">
        <p>
      When such holes freeze,
      and a rain succeeds, and finally a new freezing forms a fresh smooth ice over all,
      it is beautifully mottled internally by dark figures, shaped somewhat like a spider web,
       what you may call ice rosettes,
       produced by the channels worn by the water flowing from all sides to a centre.
        </p>
      </div>
    </div>
  </div>
);

export default About;
