import React, { Component } from "react";

import "../styles/FilterRow.css";
import { constFilterType } from "../const/api";
import PropTypes from "prop-types";

class FilterRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: constFilterType.allTime
    };
  }
  onFilterClick = type => {
    if (type !== this.state.type) {
      this.setState({ type: type });
      this.props.onFilterClick(type);
    }
  };
  render() {
    const { type } = this.state;
    return (
      <tr className="filter-row-component">
        <th className="number">#</th>
        <th>Campname</th>
        <th className="filter-title" ref="recent">
          <span
            className={type === constFilterType.recent ? "selected-filter" : ""}
            onClick={this.onFilterClick.bind(this, constFilterType.recent)}
          >
            Points in past 30 days
          </span>
        </th>
        <th className="filter-title" ref="allTime">
          <span
            className={
              type === constFilterType.allTime ? "selected-filter" : ""
            }
            onClick={this.onFilterClick.bind(this, constFilterType.allTime)}
          >
            All time points
          </span>
        </th>
      </tr>
    );
  }
}

FilterRow.propTypes = {
  onFilterClick: PropTypes.func
};

export default FilterRow;
