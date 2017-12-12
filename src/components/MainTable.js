import React, { Component } from "react";
import FilterRow from "./FilterRow";
import SimpleRow from "./SimpleRow";
import Footer from "./Footer";

import "../styles/MainTable.css";
import { constFilterType } from "../const/const.js";

class MainTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.allTimeData
    };
  }
  onFilterClick(type) {
    type === constFilterType.allTime
      ? this.setState({ data: this.props.allTimeData })
      : this.setState({ data: this.props.thirtyDayData });
  }
  render() {
    return (
      <div className="main-table-component">
        <div className="header" />
        <div className="main-table">
          <div className="header">
            <span className="header-text">Leaderboard</span>
          </div>
          <table cellSpacing="0" cellPadding="0">
            <tbody>
              <FilterRow onFilterClick={this.onFilterClick.bind(this)} />
              {this.state.data.map((rowData, i) => (
                <SimpleRow rowData={rowData} key={i} number={i} />
              ))}
            </tbody>
          </table>
        </div>
        <Footer name="Vitalii Kulyk" />
      </div>
    );
  }
}

export default MainTable;
