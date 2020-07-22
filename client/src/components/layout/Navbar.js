import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper white">
            <Link
              to="/"
              style={{
                fontFamily: "monospace"
              }}
              className="col s5 brand-logo center black-text"
            >
              <img alt="logo-slash" style={{width: "300px"}} src="https://images.prismic.io/slash-website-2020-uat/c9e42a59-7f19-4180-b49c-cee0c1656af2_Slash_Alternative+Primary.png?auto=compress,format&rect=0,327,1755,597&w=500&h=170" />
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
