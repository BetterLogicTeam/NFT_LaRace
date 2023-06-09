import React from "react";
import "./Header.css";
import metamask from "../../Assest/metamask.png";
import "../../Assest/main.a78c3d1c.css";
import logo from "../../Assest/logo.png";
import mint from "../../Assest/mint.png";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
export default function Header() {
  return (
    <div>
      <div>
        <nav className="navigation">
          <a href="/" className="logo">
            <img className="logo" src={logo} alt="" />
          </a>
          <input type="checkbox" className="menu-btn" id="menu-btn" />
          <label for="menu-btn" className="menu-icon">
            <span className="nav-icon"></span>
          </label>
          <ul className="menu">
            <li>
              <a ><HashLink  className="text_de" to="/#main">Home</HashLink> </a>
            </li>
            <li>
              <a > <HashLink className="text_de" to="/#about">About</HashLink></a>
            </li>
           
            <li>
               <HashLink className="text_de" to="/#Vision">Vision</HashLink> 
            </li>
            <li>
              <a href="#"className="text_de">marketplace</a>
            </li>
          </ul>
          <ul className="menu nav-imgs">
            <li>
              <Link to="#">
                <a href="">
                  <img class="nav-img" src="images/download.png" />
                </a>
              </Link>
            </li>
            <li>
              <Link to="/Items/Mint">
                <a href="">
                  <img class="nav-img" src={mint} />
                </a>
              </Link>
            </li>
            <li>
              <a href="">
                <img className="nav-img" src={metamask} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
