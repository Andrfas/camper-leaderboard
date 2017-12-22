import React, { Component } from "react";
import "../styles/App.css";
import MainTable from "./MainTable";
import { connect } from "react-redux";

import { fetchUsers, fetchRecentUsers } from "../modules/users";
import { constFilterType } from "../const/api";      
import PropTypes from "prop-types";

class App extends Component {
  constructor(props) {
    super(props);
    this.fetchUsers = this.fetchUsers.bind(this);
    this.fetchRecentUsers = this.fetchRecentUsers.bind(this);
    this.filterClick = this.filterClick.bind(this);
    this.state = {
      type: constFilterType.allTime
    };
  }
  filterClick(type){
    type === constFilterType.allTime
    ? this.fetchUsers()
    : this.fetchRecentUsers();
  }
  fetchUsers() {
    this.props.dispatch(fetchUsers());
    this.setState({ type: constFilterType.allTime });
  }
  fetchRecentUsers() {
    this.props.dispatch(fetchRecentUsers());
    this.setState({ type: constFilterType.recent });
  }
  render() {
    return (
      <div className="App">
        <MainTable
          name={this.props.users.currentUser}
          usersData={
            this.state.type === constFilterType.allTime
              ? this.props.users.allUsersData
              : this.props.users.recentUsersData
          }
          filterClick={this.filterClick}
        />
      </div>
    );
  }
}

App.propTypes = {
  users: PropTypes.object
}

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

export default connect(mapStateToProps)(App);
