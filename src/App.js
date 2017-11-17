import React, { Component } from 'react';

import authClient from './authClient';

import Dashboard from './Dashboard/'

import apolloClient from './lib/apollo';
// import { Admin } from './UI/system';
import { Admin } from './UIoverride';
import { ui } from 'oda-aor-rest';

global.connection = apolloClient({ uri: 'http://localhost:3003/graphql' });

class App extends Component {
  render() {
    return (
      <Admin
        customSagas={[ui.sagas.monitorChanges,]}
        customReducers={{ apollo: global.connection.reducer() }}
        title="SW-API"
        uix={this.props.uix}
        connection={global.connection}
        queries={this.props.queries}
        resources={this.props.resources}
        dashboard={Dashboard}
        authClientInit={authClient}
      />
    );
  }
}

export default App;
