import React, { Component } from "react";

import "../styles/SimpleRow.css";
import constApi from "../const/const";

class SimpleRow extends Component {
  render() {
    let rowData = this.props.rowData;
    return (
      <tr className="simple-row-component">
        <td className="number">{this.props.number + 1}</td>
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

export default SimpleRow;
