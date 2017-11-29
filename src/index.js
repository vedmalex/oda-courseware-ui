import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Resources, uix } from './UIoverride';
// import { Resources, uix } from './UI/system';
import apolloClient from './lib/apollo';

const client = apolloClient({ uri: 'http://localhost:3003/graphql' });
ReactDOM.render(
  <App client={client} resources={new Resources()} uix={uix} />
  , document.getElementById('root'));
registerServiceWorker();
