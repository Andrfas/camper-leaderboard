import React, { Component } from "react";

import "../styles/Footer.css";

import PropTypes from "prop-types";

class Footer extends Component {
  render() {
    return (
      <div className="footer-component">
        <span>{this.props.name}</span>
      </div>
    );
  }
}

Footer.propTypes = {
  name: PropTypes.string    
}

export default Footer;
