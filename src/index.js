import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Resources, uix } from './UIoverride';
// import { Resources, uix } from './UI/system';

ReactDOM.render(<App resources={new Resources()} uix={uix} />, document.getElementById('root'));
registerServiceWorker();
