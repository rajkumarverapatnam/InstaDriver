import React, { Component } from "react";

import filter from "../assets/filter.svg";
import messageIcon from "./../assets/messageIcon.svg";

class LoginForm extends Component {
  state = {
    value: "India",
  };

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <div>
        <div className="headerEmail">
          <div>
            <a href="#">
              <img src={messageIcon} alt="email" />
              saysomething@instadriver.co
            </a>
          </div>
        </div>
        <div className="container-fluid loginForm">
          <div className="row">
            <div className="formBlock">
              <h3>
                Find and Hire A Driver. Its Free
                <br />
                and No Login Requirement
              </h3>
              <div className="form-group">
                {/* <label for="sel1">Select Category</label> */}
                <select className="form-control sel1" id="sel1">
                  <option>Select Category</option>
                  <option>Personal Driver</option>
                  <option>Public Commuter Driver (e.g. Bus, Ambulance)</option>
                  <option>Ride-Sharing Driver e.g Uber, Taxify</option>
                  <option>School Bus Driver</option>
                  <option>Truck Driver</option>
                  <option>Forklift Driver</option>
                  <option>On-Demand Driver</option>
                </select>

                <div className="input-group sel1">
                  <input
                    type="text"
                    className="form-control select sel1"
                    id="loc"
                    name="loc"
                    placeholder="Enter a location"
                  />
                  <span className="input-group-addon inpGrp">
                    {/* <i className="glyphicon glyphicon-map-marker"></i> */}
                    <svg
                      className="locationIcon"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </span>
                </div>

                <select className="form-control sel1" id="sel2">
                  <option>Select Search Type</option>
                  <option>Search All Drivers</option>
                  <option>Search Verified Drivers</option>
                </select>
                <div className="filterSearch">
                  <div className="row">
                    <div className="col-md-2 col-sm-2 col-xs-2">
                      <button
                        type="button"
                        className="btn  btn-xs filterIcons"
                        data-toggle="modal"
                        data-target="#myModal"
                      >
                        <img src={filter} alt="filter" />
                      </button>
                    </div>
                    <div className="col-md-10 col-sm-10 col-xs-10">
                      <button className="filterSearchBtn">Search</button>
                    </div>
                  </div>

                  <div className="modal fade" id="myModal" role="dialog">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                          >
                            &times;
                          </button>
                          <h4 className="modal-title">Filter</h4>
                        </div>
                        <div className="modal-body">
                          <div className="row">
                            <div className="col-md-8 col-lg-8 col-sm-8">
                              <div className="form-group">
                                <label htmlFor="sel1">
                                  Select currency used in your country
                                </label>
                                <select
                                  className="form-control"
                                  value={this.state.value}
                                  onChange={this.handleChange}
                                >
                                  <option value="usa">
                                    United States Dollars
                                  </option>
                                  <option value="EUR">Euro</option>
                                  <option value="GBP">
                                    United Kingdom Pounds
                                  </option>
                                  <option value="DZD">Algeria Dinars</option>
                                  <option value="ARP">Argentina Pesos</option>
                                  <option value="AUD">Australia Dollars</option>
                                  <option value="ATS">
                                    Austria Schillings
                                  </option>
                                  <option value="BSD">Bahamas Dollars</option>
                                  <option value="BBD">Barbados Dollars</option>
                                  <option value="BEF">Belgium Francs</option>
                                  <option value="BMD">Bermuda Dollars</option>
                                  <option value="BRR">Brazil Real</option>
                                  <option value="BGL">Bulgaria Lev</option>
                                  <option value="CAD">Canada Dollars</option>
                                  <option value="CLP">Chile Pesos</option>
                                  <option value="CNY">
                                    China Yuan Renmimbi
                                  </option>
                                  <option value="CYP">Cyprus Pounds</option>
                                  <option value="CSK">
                                    Czech Republic Koruna
                                  </option>
                                  <option value="DKK">Denmark Kroner</option>
                                  <option value="NLG">Dutch Guilders</option>
                                  <option value="XCD">
                                    Eastern Caribbean Dollars
                                  </option>
                                  <option value="EGP">Egypt Pounds</option>
                                  <option value="FJD">Fiji Dollars</option>
                                  <option value="FIM">Finland Markka</option>
                                  <option value="FRF">France Francs</option>
                                  <option value="DEM">
                                    Germany Deutsche Marks
                                  </option>
                                  <option value="XAU">Gold Ounces</option>
                                  <option value="GRD">Greece Drachmas</option>
                                  <option value="HKD">Hong Kong Dollars</option>
                                  <option value="HUF">Hungary Forint</option>
                                  <option value="ISK">Iceland Krona</option>
                                  <option value="INR">India Rupees</option>
                                  <option value="IDR">Indonesia Rupiah</option>
                                  <option value="IEP">Ireland Punt</option>
                                  <option value="ILS">
                                    Israel New Shekels
                                  </option>
                                  <option value="ITL">Italy Lira</option>
                                  <option value="JMD">Jamaica Dollars</option>
                                  <option value="JPY">Japan Yen</option>
                                  <option value="JOD">Jordan Dinar</option>
                                  <option value="KRW">Korea (South) Won</option>
                                  <option value="LBP">Lebanon Pounds</option>
                                  <option value="LUF">Luxembourg Francs</option>
                                  <option value="MYR">Malaysia Ringgit</option>
                                  <option value="MXP">Mexico Pesos</option>
                                  <option value="NLG">
                                    Netherlands Guilders
                                  </option>
                                  <option value="NZD">
                                    New Zealand Dollars
                                  </option>
                                  <option value="NOK">Norway Kroner</option>
                                  <option value="PKR">Pakistan Rupees</option>
                                  <option value="XPD">Palladium Ounces</option>
                                  <option value="PHP">Philippines Pesos</option>
                                  <option value="XPT">Platinum Ounces</option>
                                  <option value="PLZ">Poland Zloty</option>
                                  <option value="PTE">Portugal Escudo</option>
                                  <option value="ROL">Romania Leu</option>
                                  <option value="RUR">Russia Rubles</option>
                                  <option value="SAR">
                                    Saudi Arabia Riyal
                                  </option>
                                  <option value="XAG">Silver Ounces</option>
                                  <option value="SGD">Singapore Dollars</option>
                                  <option value="SKK">Slovakia Koruna</option>
                                  <option value="ZAR">South Africa Rand</option>
                                  <option value="KRW">South Korea Won</option>
                                  <option value="ESP">Spain Pesetas</option>
                                  <option value="XDR">
                                    Special Drawing Right (IMF)
                                  </option>
                                  <option value="SDD">Sudan Dinar</option>
                                  <option value="SEK">Sweden Krona</option>
                                  <option value="CHF">
                                    Switzerland Francs
                                  </option>
                                  <option value="TWD">Taiwan Dollars</option>
                                  <option value="THB">Thailand Baht</option>
                                  <option value="TTD">
                                    Trinidad and Tobago Dollars
                                  </option>
                                  <option value="TRL">Turkey Lira</option>
                                  <option value="VEB">Venezuela Bolivar</option>
                                  <option value="ZMK">Zambia Kwacha</option>
                                  <option value="EUR">Euro</option>
                                  <option value="XCD">
                                    Eastern Caribbean Dollars
                                  </option>
                                  <option value="XDR">
                                    Special Drawing Right (IMF)
                                  </option>
                                  <option value="XAG">Silver Ounces</option>
                                  <option value="XAU">Gold Ounces</option>
                                  <option value="XPD">Palladium Ounces</option>
                                  <option value="XPT">Platinum Ounces</option>
                                </select>
                              </div>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-4">
                              <div className="form-group">
                                <div htmlFor="email">Salary</div>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="email"
                                  placeholder="Enter email"
                                  name="email"
                                />
                              </div>
                            </div>

                            <div className="col-lg-4 col-md-4 col-sm-4">
                              <div
                                htmlFor="email"
                                style={{ visibility: "hidden" }}
                              >
                                Salary
                              </div>
                              <input
                                type="text"
                                className="form-control"
                                id="pwd"
                                placeholder="Enter password"
                                name="pwd"
                              />
                            </div>

                            <div className="col-lg-4 col-md-4 col-sm-4">
                              <select className="form-control sel1" id="sel1">
                                <option>Select</option>
                                <option>Male</option>
                                <option>Female</option>
                              </select>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                              <div className="form-group">
                                <div htmlFor="email">
                                  <strong>
                                    Years since driving Licence
                                    <br /> was issued
                                  </strong>
                                </div>
                                <div className="col-lg-8 col-md-8 col-sm-8">
                                  <div className="row">
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="email"
                                      placeholder="Enter email"
                                      name="email"
                                    />
                                  </div>
                                </div>

                                <div className="col-lg-4 col-md-4 col-sm-4">
                                  <div className="row">
                                    <span
                                      className="input-group-text"
                                      id="basic-addon2"
                                    >
                                      Years
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-6">
                              <div htmlFor="email">
                                <strong>
                                  Driving
                                  <br /> experience
                                </strong>
                              </div>
                              <div className="col-lg-8 col-md-8 col-sm-8">
                                <div className="row">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="email"
                                    placeholder="Enter email"
                                    name="email"
                                  />
                                </div>
                              </div>

                              <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="row">
                                  <span
                                    className="input-group-text"
                                    id="basic-addon2"
                                  >
                                    Years
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                              <p className="textSectionFilter">
                                You may consider editing your filters or
                                watering down your filters for fast search.
                                Otherwise, go with the selected filters.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn  btn-formFilter "
                          >
                            Apply
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
