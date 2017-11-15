import React, { Component } from 'react';
import { client } from 'oda-aor-rest';
import Loading from 'react-loading-animation'
import { Admin, Resource, Delete } from 'admin-on-rest';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restClient: null,
      authClient: null,
      queries: null,
      resources: null,
      uix: null,
    };
  }

  componentDidMount() {
    this.init(this.props, this.context);
  }
  componentWillReceiveProps(nextProps, nextContext) {
    this.init(nextProps, nextContext);
  }

  init(nextProps/* , nextContext */) {
    this.setState({
      restClient: client({
        client: nextProps.connection,
        resources: nextProps.resources,
        queries: nextProps.queries,
      }),
      authClient: nextProps.authClientInit(nextProps.connection),
      queries: this.props.queries,
      resources: this.props.resources,
      uix: this.props.uix,
    });
  }

  render() {
    const { restClient, authClient, uix } = this.state;
    if (!restClient) {
      return <div className="loading-component"><Loading /></div>;
    }
    const {
      User,
      Film,
      Person,
      Planet,
      Species,
      Starship,
      Vehicle,
    } = uix;

    return (
      <Admin
        {...this.props}
        authClient={authClient}
        restClient={restClient}>
        <Resource
          show={User.Show}
          name="User"
          edit={User.Edit}
          create={User.Create}
          list={User.List}
          remove={Delete}
        />
        <Resource
          show={Film.Show}
          name="Film"
          edit={(props) => <Film.Edit {...props} />}
          create={Film.Create}
          list={Film.List}
          remove={Delete}
        />
        <Resource
          show={Person.Show}
          name="Person"
          edit={Person.Edit}
          create={Person.Create}
          list={Person.List}
          remove={Delete}
        />
        <Resource
          show={Planet.Show}
          name="Planet"
          edit={Planet.Edit}
          create={Planet.Create}
          list={Planet.List}
          remove={Delete}
        />
        <Resource
          show={Species.Show}
          name="Species"
          edit={Species.Edit}
          create={Species.Create}
          list={Species.List}
          remove={Delete}
        />
        <Resource
          show={Starship.Show}
          name="Starship"
          edit={Starship.Edit}
          create={Starship.Create}
          list={Starship.List}
          remove={Delete}
        />
        <Resource
          show={Vehicle.Show}
          name="Vehicle"
          edit={Vehicle.Edit}
          create={Vehicle.Create}
          list={Vehicle.List}
          remove={Delete}
        />
      </Admin>
    );
  }
}



