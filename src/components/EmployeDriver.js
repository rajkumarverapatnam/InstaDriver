import React from "react";

import "../fs.css";
import employees from "../assets/employees.svg";
import drivers from "../assets/drivers.svg";
import oceanWaves from "../assets/ocean-waves.png";
import oceanWavesWhite from "../assets/ocean-waves-white.png";

let EmployeDriver = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 col-sm-6" id="employeBg">
          <div className="col-md-7 col-sm-7 col-md-offset-3 col-sm-offset-3 empDriver_center">
            <img src={employees} alt="employees" />
            <h2>Employers!</h2>
            <img src={oceanWaves} alt="oceanWaves" />
            <p>
              You don’t have to waste money posting vacancy Ads. Stop posting
              vacancy ads on whatsapp groups and on social media. Stop making
              desperate hires because you have few choices. Stop nagging your
              friends to find you a driver. Get your driver from Instadriver and
              it is free. At Instadriver, you have a long list to choose a
              competent driver. Go to search bar, select the driver category you
              want, choose the location of the driver and press search button.
              Pick the driver you want. It is that simple and instantaneous.
            </p>
          </div>
        </div>
        <div className="col-md-6 col-sm-6" id="driverBg">
          <div className="col-md-7 col-sm-7 col-md-offset-1 col-sm-offset-1 empDriver_center">
            <img src={drivers} alt="employees" />
            <h2>Drivers!</h2>
            <img src={oceanWavesWhite} alt="oceanWaves" />
            <p>
              This is a platform to get employed faster and effortlessly. It is
              not fun staying unemployed. You don’t have to toil asking your
              relatives, friends and acquaintances to find you a job. Get a job
              instantly. Just post your profile on Instadriver and employers
              will find you instantaneously. You can increase your visibility
              and increase the odds of getting hired by using the Verified
              Feature and the Top Add Feature. To create your profile for free,
              click here. This is how millennials and Gen Z find employment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EmployeDriver;
