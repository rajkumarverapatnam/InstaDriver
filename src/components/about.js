import React from "react";

import aboutUs from "../assets/aboutus.svg";
import verify from "../assets/verify.svg";
import topadd from "../assets/topadd.svg";

let About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="col-md-4 col-sm-4">
          <img src={aboutUs} alt="floatDesign" />
          <h4>About Us</h4>
          <p>
            Learn how useful <br /> Instadriver is to <br />
            both the employer and drivers
          </p>
        </div>
        <div className="col-md-4 col-sm-4">
          <img src={verify} alt="floatDesign" />
          <h4>Verified Search</h4>
          <p>
            Learn how employers can <br /> cut the curve and save <br />a lot by
            using verified search
          </p>
        </div>
        <div className="col-md-4 col-sm-4">
          <img src={topadd} alt="floatDesign" />
          <h4>Top Ad Feature</h4>
          <p>
            See how top ad feature <br />
            can increase the odds
            <br /> of a driver getting hired
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
