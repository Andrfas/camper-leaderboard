import React, { Component } from "react";
import "../styles/App.css";

import MainTable from "./MainTable";

import { connect } from "react-redux";
import { bindActionCreators } from 'redux'

import * as loadActions from '../actions/loadActions.js';


class App extends Component {
  changeUser(){
    let name = "Kate Porodianno";
    this.props.loadActions.changeUser(name);
  }
  render() {
    return (
      <div className="App">
        <MainTable
          thirtyDayData={this.props.thirtyDayData}
          allTimeData={this.props.allTimeData}
          name={this.props.users.currentUser}
          changeUser = {this.changeUser.bind(this)}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadActions: bindActionCreators(loadActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
