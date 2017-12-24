import React, { Component } from "react";

import "../styles/SimpleRow.css";
import constApi from "../const/api";

import PropTypes from "prop-types";

class SimpleRow extends Component {
  render() {
    const {rowData, number} = this.props;
    return (
      <tr className="simple-row-component">
        <td className="number">{number + 1}</td>
        <td className="camp-name">
          <img
            className="logo-img"
            src={rowData.img}
            alt={rowData.username + " logo"}
          />
          <div className="nickname">
            <span>
              <a href={constApi.path + rowData.username}>{rowData.username}</a>
            </span>
          </div>
        </td>
        <td className="points-past-30-days">{rowData.recent}</td>
        <td className="points-all-time">{rowData.alltime}</td>
      </tr>
    );
  }
}

SimpleRow.propTypes = {
  rowData: PropTypes.object,
  number: PropTypes.number
}

export default SimpleRow;
