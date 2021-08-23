import React, { Component } from "react";
import Logo from "../assest/company-logo.jpeg";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="d-flex justify-content-between">
          <div className="d-flex px-2 py-4">
            <div>
              <img src={Logo} className="logo-img" />
            </div>
            <div
              className="px-4 d-none d-md-block"
            >
              Blog
            </div>

            <div
              className="px-4 d-none d-md-block"
            >
              Pricing
            </div>

            <div
              className="px-4 d-none d-md-block"
            >
              Help
            </div>
          </div>
          <div className="d-flex px-3 py-3">
            <div className="px-3 py-2">
              Log in
            </div>
            <button className="btn signup-button mt-1 mr-3">
              SING UP FREE
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
