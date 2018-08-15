import React,{ Component} from 'react';
import { Link } from 'react-router-dom';
import BurgerBtn from 'react-icons/lib/fa/align-justify';
import './index.css';

class Header extends Component {
    state = {
      displayBtn: false
    };
handleClick = () => {
  if (this.state.displayBtn) {
    this.setState({
      displayBtn: false
    })
  } else {
    this.setState({
      displayBtn: true
    })
  }
}
  render() {
    return (
      <div className="Navbar">
        <div className="container">
          <div className="Navbar_logo">
            <span>
              PERSONAL
            </span>
          </div>
          <div className="burger_btn">
            <BurgerBtn onClick={this.handleClick}/>
          </div>
          <nav className={`Navbar_nav ${this.state.displayBtn ? 'active' : 'unactive'}`}>
            <div className="Navbar_nav_item">
              <span><Link to="/">HOME</Link></span>
              <div className="Navbar_nav_item_decoration " />
            </div>
            <div className="Navbar_nav_item">
              <span><Link to="/about">ABOUT</Link></span>
              <div className="Navbar_nav_item_decoration " />
            </div>
            <div className="Navbar_nav_item">
              <span><Link to="/service">SERVICE</Link></span>
              <div className="Navbar_nav_item_decoration " />
            </div>
            <div className="Navbar_nav_item">
              <span><Link to="/protfolio">PROTFILIO</Link></span>
              <div className="Navbar_nav_item_decoration " />
            </div>
            <div className="Navbar_nav_item">
              <span><Link to="/Contact">CONTACT</Link></span>
              <div className="Navbar_nav_item_decoration point" />
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
export default Header;
