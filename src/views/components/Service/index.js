import React from 'react';
import P1 from 'react-icons/lib/md/devices-other';
import P2 from 'react-icons/lib/md/border-color';
import P3 from 'react-icons/lib/md/bubble-chart';
import P4 from 'react-icons/lib/md/developer-mode';
import P5 from 'react-icons/lib/md/security';
import P6 from 'react-icons/lib/md/lightbulb-outline';

import HeaderTitle from '../common/HeaderTitle';
import SlidBtn from '../common/SlidBtn';
import './index.css';


const Service = () => (
  <div className="main">
    <HeaderTitle title="Our Latest Featured Projects" />
    <div className="service">
      <SlidBtn />
      <div className="service_items">
        <div className="container">
          <div className="proj">
            <div className="service_item">
              <P1 />
              <div className="service_item_detail">
                <h4>Web Design</h4>
                <p> simply dummy text of the printing and typesetting industry.</p>
              </div>
            </div>
            <div className="service_item">
              <P2 />
              <div className="service_item_detail">
                <h4>Web Development</h4>
                <p> simply dummy text of the printing and typesetting industry.</p>
              </div>
            </div>
            <div className="service_item">
              <P3 />
              <div className="service_item_detail">
                <h4>Web Development</h4>
                <p> simply dummy text of the printing and typesetting industry.</p>
              </div>
            </div>
            <div className="service_item">
              <P4 />
              <div className="service_item_detail">
                <h4>2D Vinyl Design</h4>
                <p> simply dummy text of the printing and typesetting industry.</p>
              </div>
            </div>
            <div className="service_item">
              <P5 />
              <div className="service_item_detail">
                <h4>2D Vinyl Design</h4>
                <p> simply dummy text of the printing and typesetting industry.</p>
              </div>
            </div>
            <div className="service_item">
              <P6 />
              <div className="service_item_detail">
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

export default Service;
