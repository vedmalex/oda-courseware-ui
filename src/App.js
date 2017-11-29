import React, { Component } from 'react';

import { ApolloProvider } from 'react-apollo';
import Dashboard from './Dashboard/'

// import { Admin } from './UI/system';
import { Admin } from './UIoverride';
import { ui } from 'oda-aor-rest';
import AutoFormProvider from './lib/adminAutoFormProvider';

class App extends Component {
  render() {
    return (
      <AutoFormProvider uix={this.props.uix} resources={this.props.resources} client={this.props.client}>
        <Admin
          customSagas={[ui.sagas.monitorChanges,]}
          title="SW-API"
          dashboard={Dashboard}
        />
      </AutoFormProvider>
    );

  }
}

export default App;
