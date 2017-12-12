import React, { Component } from 'react';
import '../styles/App.css';

import MainTable from './MainTable';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainTable thirtyDayData={this.props.thirtyDayData}
                   allTimeData={this.props.allTimeData} />
      </div>
    );
  }
}

export default App;
