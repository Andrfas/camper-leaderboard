import React, { Component } from "react";

import "../styles/Footer.css";

class Footer extends Component {
  render = () => {
    return (
      <div className="footer-component">
          <span>{this.props.name}</span>
      </div>
    );
  }
}

export default Footer;
