import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";

import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import allTimeData from "./mocks/topAllTime.json";
import thirtyDayData from "./mocks/topThirtyDay.json";

import { Provider } from "react-redux";
import configureStore from "./store/configureStore.js";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App allTimeData={allTimeData} thirtyDayData={thirtyDayData} />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
