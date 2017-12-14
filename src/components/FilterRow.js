import React, { Component } from "react";

import "../styles/FilterRow.css";
import { constFilterType } from "../const/const.js";

class FilterRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: constFilterType.allTime
    };
  }
  onFilterClick = type => {
    if (type !== this.state.type){
      if (typeof this.props.onFilterClick === "function") {
        this.setState({ type: type });
        this.props.onFilterClick(type);
      }
    }
  }
  render = () => {
    return (
      <tr className="filter-row-component">
        <th className="number">#</th>
        <th>Campname</th>
        <th className="filter-title" ref="recent">
          <span
            className={this.state.type === constFilterType.recent ? "selected-filter" : ""}
            onClick={this.onFilterClick.bind(this, constFilterType.recent)}
          >
            Points in past 30 days
          </span>
        </th>
        <th className="filter-title" ref="allTime">
          <span
            className={this.state.type === constFilterType.allTime? 'selected-filter' : ''}
            onClick={this.onFilterClick.bind(this, constFilterType.allTime)}
          >
            All time points
          </span>
        </th>
      </tr>
    );
  }
}

export default FilterRow;
