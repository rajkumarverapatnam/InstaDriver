import React, { Component } from "react";

import Header from "./components/header";
import SectionParts from "./components/SectionParts";
import EmployeDriver from "./components/EmployeDriver";
import About from "./components/about";
import VerifyDriver from "./components/verifyDriver";
import Footer from "./components/footer";
import LoginForm from "./components/loginForm";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Header />
          <LoginForm />
          <SectionParts />
          <EmployeDriver />
          <About />
          <VerifyDriver />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
