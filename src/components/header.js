import React, { Component } from "react";

import logo from "./../assets/logo.svg";
import iconBars from "./../assets/iconBars.svg";
import messageIcon from "./../assets/messageIcon.svg";

import "../fs.css";

class Header extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <nav className="navbar " id="navHeight">
            <div className="container">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle"
                  data-toggle="collapse"
                  data-target="#myNavbar"
                >
                  <img src={iconBars} alt="iconBars" />
                  {/* <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span> */}
                </button>
                <a className="navbar-brand" href="#">
                  <img src={logo} alt="logo" />
                </a>
              </div>
              <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="nav navbar-nav  navbar-right" id="navBarUl">
                  <li className="navBarLi">
                    <a href="#">Jobs</a>
                  </li>
                  <li className="navBarLi">
                    <a href="#">Get Social</a>
                  </li>
                  <li className="navBarLi">
                    <a href="#">Sign In</a>
                  </li>
                  <li className="dropdown">
                    <a
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                      href="#"
                    >
                      Menu <img src={iconBars} alt="iconBars" />
                    </a>
                    <ul className="dropdown-menu dropDownUl">
                      <li>
                        <a href="#">Home</a>
                      </li>
                      <li>
                        <a href="#">About InstaDriver</a>
                      </li>
                      <li>
                        <a href="#">
                          Verified Search (For Employers & Drivers)
                        </a>
                      </li>
                      <li>
                        <a href="#">Top Ad Feature (For Drivers)</a>
                      </li>
                      <li>
                        <a href="#">FAQs</a>
                      </li>
                      <li>
                        <a href="#">Contact Us</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="headerEmail">
            <div>
              <a href="#">
                <img src={messageIcon} alt="email" />
                saysomething@instadriver.co
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
