import React from 'react';
import HeaderTitle from '../common/HeaderTitle';
import SlidBtn from '../common/SlidBtn';
import './index.css';

import P1 from '../../assets/p1.jpg';
import P2 from '../../assets/p2.jpg';
import P3 from '../../assets/p3.jpg';
import P4 from '../../assets/p4.jpg';
import P5 from '../../assets/p5.jpg';
import P6 from '../../assets/p6.jpg';

const Protfolio = () => (
  <div className="main">
    <HeaderTitle title="Our Latest Featured Projects" />
    <div className="protfolio">
      <SlidBtn />
      <div className="protfolio_items">
        <div className="container">
          <div className="proj">
            <div className="protfolio_item">
              <img src={P1} alt="Project not found" />
              <div className="protfolio_item_highlite">
                <h4>2D Vinyl Design</h4>
                <p> simply dummy text of the printing and typesetting industry.</p>
              </div>
            </div>
            <div className="protfolio_item">
              <img src={P2} alt="Project not found" />
              <div className="protfolio_item_highlite">
                <h4>2D Vinyl Design</h4>
                <p> simply dummy text of the printing and typesetting industry.</p>
              </div>
            </div>
            <div className="protfolio_item">
              <img src={P3} alt="Project not found" />
              <div className="protfolio_item_highlite">
                <h4>2D Vinyl Design</h4>
                <p> simply dummy text of the printing and typesetting industry.</p>
              </div>
            </div>
            <div className="protfolio_item">
              <img src={P4} alt="Project not found" />
              <div className="protfolio_item_highlite">
                <h4>2D Vinyl Design</h4>
                <p> simply dummy text of the printing and typesetting industry.</p>
              </div>
            </div>
            <div className="protfolio_item">
              <img src={P5} alt="Project not found" />
              <div className="protfolio_item_highlite">
                <h4>2D Vinyl Design</h4>
                <p> simply dummy text of the printing and typesetting industry.</p>
              </div>
            </div>
            <div className="protfolio_item">
              <img src={P6} alt="Project not found" />
              <div className="protfolio_item_highlite">
                <h4>2D Vinyl Design</h4>
                <p> simply dummy text of the printing and typesetting industry.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Protfolio;
