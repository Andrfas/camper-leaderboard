import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import allTimeData from './mocks/topAllTime.json';
import thirtyDayData from './mocks/topThirtyDay.json';

ReactDOM.render(<App allTimeData={allTimeData} thirtyDayData={thirtyDayData}/>, document.getElementById('root'));
registerServiceWorker();
