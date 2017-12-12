import React, { Component } from "react";

import "../styles/Footer.css";

class Footer extends Component {
  changeUser(){
    this.props.changeUser();
  }
  render() {
    return (
      <div className="footer-component">
          <span onClick={this.changeUser.bind(this)}>{this.props.name}</span>
      </div>
    );
  }
}

export default Footer;
