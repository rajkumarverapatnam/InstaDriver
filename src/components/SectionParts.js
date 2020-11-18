import React from "react";

import "../fs.css";
import oceanWave from "../assets/ocean-waves.png";
import searchdriver from "../assets/searchdriver.svg";
import calldriver from "../assets/calldriver.svg";
import hiredriver from "../assets/hiredriver.svg";
import messageIcon from "./../assets/messageIcon.svg";

let SectionParts = () => {
  return (
    <section>
      <div className="sectionA">
        <h3>How it works</h3>
        <img src={oceanWave} alt="floatDesign" />

        <div className="navPills">
          <ul className="nav nav-pills">
            <li className="navpillA">
              <a data-toggle="pill" href="#home">
                For Employers
              </a>
            </li>
            <li className="active">
              <a data-toggle="pill" href="#menu1">
                For Drivers
              </a>
            </li>
          </ul>

          <div className="tab-content container">
            <div id="home" className="tab-pane fade in active">
              <div className="col-md-4 col-sm-4 col-xs-12">
                <img src={searchdriver} alt="search" />
                <h4>Search Driver</h4>
                <p>
                  Visit Instadriver platform, select the driver category you
                  want, choose the location of the driver and you can either
                  select all drivers or verified drivers and press search
                  button.
                </p>
              </div>
              <div className="col-md-4 col-sm-4 col-xs-12">
                <img src={calldriver} alt="search" />
                <h4>Call Driver</h4>
                <p>
                  After hitting search button, you will see summarised profiles
                  of the drivers with their contacts. Click view profile, to
                  read the full profile. Access the contact number and call the
                  driver.
                </p>
              </div>
              <div className="col-md-4 col-sm-4 col-xs-12">
                <img src={hiredriver} alt="search" />
                <h4>Hire Driver</h4>
                <p>
                  On the call, discuss the job opportunity, terms and
                  conditions, or arrange a meetup to discuss further and if you
                  are both a perfect fit, proceed to hire that driver. As simple
                  as that.
                </p>
              </div>
            </div>
            <div id="menu1" className="tab-pane fade">
              <div className="col-md-4 col-sm-4 col-xs-12">
                <img src={searchdriver} alt="search" />
                <h4>Post Profile</h4>
                <p>
                  As a driver, all you need to do is to create an account with
                  Instadriver, go to your profile page and update your profile.
                  Once you post your profile, employers will be able to find
                  you.
                </p>
              </div>
              <div className="col-md-4 col-sm-4 col-xs-12">
                <img src={calldriver} alt="search" />
                <h4>Employers find you and call you</h4>
                <p>
                  Employers normally come to Instadriver to find and hire
                  drivers. Employers will be able to view your profile, and if
                  they are impressed, they will call you and you instantly get a
                  driving job.
                </p>
              </div>
              <div className="col-md-4 col-sm-4 col-xs-12">
                <img src={hiredriver} alt="search" />
                <h4>And you get hired</h4>
                <p>
                  Instadriver is the best and reliable platform for drivers to
                  get hired. When it comes to looking for drivers, employers
                  only know of Instadriver. Leverage Instadriver to get a good
                  job.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionParts;
