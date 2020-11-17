import React from "react";

import "../fs.css";

// import footerBg from "../assets/footer.png";
import footerLogo from "../assets/footerlogo.svg";

let Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="footerLogo" style={{ paddingBottom: "10px" }}>
            <img src={footerLogo} alt="footerlogo" />
          </div>

          <div className="col-md-3 col-sm-6 footerSpacing">
            <h4>Useful links</h4>
            <a href="#">
              About InstaDriver <br />
            </a>
            <a href="#">
              Verified Search (For Employers & Drivers) <br />
            </a>
            <a href="#">
              Top Ad Feature (For Drivers) <br />
            </a>
          </div>
          <div className="col-md-2 col-sm-6 footerSpacing">
            <h4>Useful links</h4>
            <a href="#">
              Driver Sign In <br />
            </a>
            <a href="#">
              Driver Sign Up <br />
            </a>
            <a href="#">
              Employer Sign in <br />
            </a>
            <a href="#">
              Employer Sign up <br />
            </a>
          </div>
          <div className="col-md-2 col-sm-6 footerSpacing">
            <h4>Useful links</h4>
            <a href="#">
              FAQs <br />
            </a>
            <a href="#">
              Contact Us <br />
            </a>
            <a href="#">
              Terms & Conditions
              <br />
            </a>
          </div>
          <div className="col-md-3 col-sm-6 footerSpacing">
            <h4>Social Media</h4>
            <ul>
              <a className="links" href="#"></a>
              <li className="list-inline-item">
                <a className="links" href="#"></a>
                <a href="https://www.facebook.com/instadrivers" target="_blank">
                  <img src="https://instadriver.co/img/facebook.svg" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://twitter.com/Instadriver1" target="_blank">
                  <img src="https://instadriver.co/img/twitter.svg" />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://www.youtube.com/channel/UCIyNdSi0KEi0mIGblffLkpg/featured?disable_polymer=1"
                  target="_blank"
                >
                  <img src="https://instadriver.co/img/youtube.svg" />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://www.instagram.com/instadriverx/"
                  target="_blank"
                >
                  <img src="https://instadriver.co/img/instagram.svg" />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-2 col-sm-6 footerSpacing">
            <h4>Contact Info</h4>
            <a href="#"> saysomething@instadriver.co</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
