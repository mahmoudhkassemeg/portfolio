import React from "react";
import "./Menu.css";
import App from '../App'
import { link } from 'react-router-dom'
function Menu() {
  function Mouseover() {}
  function Mouseout() {}
  return (
    <div className="main-menu">
      <div id="menu" className="Menu">
        <div className="menuBar"></div>
        <div className="menuBar"></div>
        <div className="menuBar"></div>
      </div>

      <div id="menu-content" className="menu-content">
        <div id="menu-container" className="menu-container"></div>
        <div id="menu-items" className="menu-items">
          <div id="item" className="menu-home">
            <h4><a href={App.id='#Home'}>Home</a></h4>
          </div>
          <div id="item" className="menu-services">
            <h4><a href={App.id='#services'}>Services</a></h4>
          </div>
          <div id="item" className="menu-contact">
            <h4><a href="#">Contact</a></h4>
          </div>
          <div id="item" className="menu-inquiry">
            <h4><a href="#">Inquiry</a></h4>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Menu;
