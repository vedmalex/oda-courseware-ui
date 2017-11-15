import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import { queries, resources, uix } from './UIoverride';
import { queries, resources, uix } from './UI/system';

ReactDOM.render(<App queries={queries} resources={resources({ queries })} uix={uix} />, document.getElementById('root'));
registerServiceWorker();
