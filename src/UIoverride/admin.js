import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { client } from 'oda-aor-rest';
import Loading from 'react-loading-animation'
import { Admin, Resource, Delete } from 'admin-on-rest';

import merge from 'lodash/merge';
import russianMessages from 'aor-language-russian';
import { englishMessages } from 'admin-on-rest';
import translationRu from './i18n/ru'
import translationEn from '../UI/system/i18n';

import menu from './menu';

const messages = {
  'en': {
    ...merge(
      englishMessages,
      translationEn,
      {
        uix: {
          locale: {
            language: "Language",
            en: 'EN',
            ru: 'RU'
          },
          configuration: 'Configuration',
        }
      },
    ),
  },
  'ru': {
    ...merge(
      russianMessages,
      translationRu,
      {
        uix: {
          locale: {
            language: "Язык",
            en: 'АНГЛ',
            ru: 'РУС'
          },
          configuration: 'Настройки',
        },
      }
    ),
  }
};

class OdaClientApp extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      restClient: context.restClient,
      authClient: context.authClient,
      uix: context.uix,
    };
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
        menu={menu}
        messages={messages}
        locale="en"
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
          name="SocialNetwork Type"
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

OdaClientApp.contextTypes = {
  uix: PropTypes.object.isRequired,
  authClient: PropTypes.func.isRequired,
  restClient: PropTypes.func.isRequired,
}

export default OdaClientApp;
