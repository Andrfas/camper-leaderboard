import React, { Component } from "react";
import "../styles/App.css";

import MainTable from "./MainTable";

import { connect } from "react-redux";

import {
  fetchPosts,
  fetchPostsSuccess,
  fetchPostsFailure
} from "../actions/loadActions.js";

class App extends Component {
  fetchPosts(type){
    this.props.fetchPosts(type);
  }
  render() {
    return (
      <div className="App">
        <MainTable
          name={this.props.users.currentUser}
          fetchPosts={this.fetchPosts.bind(this)}
          usersData={this.props.users.usersData}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: (type) => {
      debugger
      dispatch(fetchPosts(type)).then(responce => {
        let data = responce.payload.data
          ? responce.payload.data
          : { data: "Network Error" };
        !responce.error
          ? dispatch(fetchPostsSuccess(data))
          : dispatch(fetchPostsFailure(data));
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
