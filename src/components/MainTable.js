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
      type: constFilterType.allTime
    }
  }
  onFilterClick = type => {
    if (this.state.type != type){
      this.props.filterClick(type);
      this.setState({type: type});
    }
  };
  render() {
    return (
      <div className="main-table-component">
        {this.props.usersData && (
          <div>
            <div className="header" />
            <div className="main-table">
              <div className="header">
                <span className="header-text">Leaderboard</span>
              </div>
              <table cellSpacing="0" cellPadding="0">
                <tbody>
                  <FilterRow onFilterClick={this.onFilterClick.bind(this)} />
                  {this.props.usersData.map((rowData, i) => (
                    <SimpleRow rowData={rowData} key={i} number={i} />
                  ))}
                </tbody>
              </table>
            </div>
            <Footer name={this.props.name} />
          </div>
        )}
      </div>
    );
  }
}

export default MainTable;
