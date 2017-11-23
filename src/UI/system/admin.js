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
      }),
      authClient: nextProps.authClientInit(nextProps.connection),
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
      Student,
      Curator,
      Group,
      Person,
      SocialNetwork,
      SocialNetworkType,
      Email,
      EmailType,
      Phone,
      PhoneType,
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
          show={Student.Show}
          name="Student"
          edit={Student.Edit}
          create={Student.Create}
          list={Student.List}
          remove={Delete}
        />
        <Resource
          show={Curator.Show}
          name="Curator"
          edit={Curator.Edit}
          create={Curator.Create}
          list={Curator.List}
          remove={Delete}
        />
        <Resource
          show={Group.Show}
          name="Group"
          edit={Group.Edit}
          create={Group.Create}
          list={Group.List}
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
          show={SocialNetwork.Show}
          name="SocialNetwork"
          edit={SocialNetwork.Edit}
          create={SocialNetwork.Create}
          list={SocialNetwork.List}
          remove={Delete}
        />
        <Resource
          show={SocialNetworkType.Show}
          name="SocialNetworkType"
          edit={SocialNetworkType.Edit}
          create={SocialNetworkType.Create}
          list={SocialNetworkType.List}
          remove={Delete}
        />
        <Resource
          show={Email.Show}
          name="Email"
          edit={Email.Edit}
          create={Email.Create}
          list={Email.List}
          remove={Delete}
        />
        <Resource
          show={EmailType.Show}
          name="EmailType"
          edit={EmailType.Edit}
          create={EmailType.Create}
          list={EmailType.List}
          remove={Delete}
        />
        <Resource
          show={Phone.Show}
          name="Phone"
          edit={Phone.Edit}
          create={Phone.Create}
          list={Phone.List}
          remove={Delete}
        />
        <Resource
          show={PhoneType.Show}
          name="PhoneType"
          edit={PhoneType.Edit}
          create={PhoneType.Create}
          list={PhoneType.List}
          remove={Delete}
        />
      </Admin>
    );
  }
}



