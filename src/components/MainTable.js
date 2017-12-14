import React, { Component } from "react";
import FilterRow from "./FilterRow";
import SimpleRow from "./SimpleRow";
import Footer from "./Footer";

import "../styles/MainTable.css";
import { constFilterType } from "../const/const.js";

class MainTable extends Component {
  componentDidMount = () => {
    this.props.fetchPosts(constFilterType.allTime);
  }
  onFilterClick = (type) => {
    this.props.fetchPosts(type);
  }
  render = () => {
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
