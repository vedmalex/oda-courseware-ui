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
      Student,
      StudentsGroup,
      StudentProfile,
      Teacher,
      Subject,
      Following,
      StudentsGroupSubject,
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
          show={StudentsGroup.Show}
          name="StudentsGroup"
          edit={StudentsGroup.Edit}
          create={StudentsGroup.Create}
          list={StudentsGroup.List}
          remove={Delete}
        />
        <Resource
          show={StudentProfile.Show}
          name="StudentProfile"
          edit={StudentProfile.Edit}
          create={StudentProfile.Create}
          list={StudentProfile.List}
          remove={Delete}
        />
        <Resource
          show={Teacher.Show}
          name="Teacher"
          edit={Teacher.Edit}
          create={Teacher.Create}
          list={Teacher.List}
          remove={Delete}
        />
        <Resource
          show={Subject.Show}
          name="Subject"
          edit={Subject.Edit}
          create={Subject.Create}
          list={Subject.List}
          remove={Delete}
        />
        <Resource
          show={Following.Show}
          name="Following"
          edit={Following.Edit}
          create={Following.Create}
          list={Following.List}
          remove={Delete}
        />
        <Resource
          show={StudentsGroupSubject.Show}
          name="StudentsGroupSubject"
          edit={StudentsGroupSubject.Edit}
          create={StudentsGroupSubject.Create}
          list={StudentsGroupSubject.List}
          remove={Delete}
        />
      </Admin>
    );
  }
}



