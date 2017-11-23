import React, { Component } from 'react';
import {
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  SimpleForm,
  TextInput,
  DateInput,
  NumberInput,
  BooleanInput,
  LongTextInput,
  required,
} from "admin-on-rest";

import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import compose from 'recompose/compose';
import { ui } from 'oda-aor-rest';
import { EmbeddedArrayInput } from 'aor-embedded-array';

const {
  DependentInput,
  EmbeddedInput,
  GrouppedInput,
  Label,
  AutocompleteInput
} = ui.components;

const actionType = ui.consts.actionType;
const initForm = ui.actions.initForm;
const finalizeForm = ui.actions.finalizeForm;
const { selectorFor, detailsFor } = ui.show;

class Form extends Component {
  componentWillMount() {
    this.props.initForm();
  }
  componentWillUnmount() {
    this.props.finalizeForm();
  }

  render() {
    const { props } = this;
    const singleRelActions = props.singleRelActions;
    const manyRelAction = props.manyRelActions;

    return (
      <SimpleForm {...props} >
        <TextInput label="Spiritual name" source="spiritualName" validate={required} />
        <TextInput label="Full name" source="fullName" validate={required} />
        <DateInput label="Date of birth" source="dateOfBirth" allowEmpty />
        <LongTextInput label="Special notes" source="specialNotes" allowEmpty />

        <Label text="User" />
        <DependentInput resolve={selectorFor('user')} scoped >
          <ReferenceInput sortable={false} label="User" source="userId" reference="User" allowEmpty  >
            <AutocompleteInput optionText="userName" />
          </ReferenceInput>
        </DependentInput>
        <SelectInput
          source="userType"
          label="Expected to"
          choices={singleRelActions}
          defaultValue={actionType.USE}
        />

        <DependentInput resolve={detailsFor('user')} >
          <EmbeddedInput label="User" source="user" addLabel={false}>
            <TextInput label="User name" source="userName" source="userName" validate={required} />
            <TextInput label="Password" source="password" source="password" validate={required} />
            <BooleanInput label="Is admin" source="isAdmin" source="isAdmin" allowEmpty />
            <BooleanInput label="Is system" source="isSystem" source="isSystem" allowEmpty />
            <BooleanInput label="Enabled" source="enabled" source="enabled" allowEmpty />
          </EmbeddedInput>
        </DependentInput>


        <EmbeddedArrayInput sortable={false} label="Social networks" source="socialNetworksValues" allowEmpty >
          <SelectInput
            source="socialNetworksType"
            label="Expected to"
            choices={manyRelAction}
            defaultValue={actionType.USE}
          />
          <DependentInput resolve={selectorFor('socialNetworks')} scoped >
            <ReferenceInput sortable={false} label="SocialNetwork" source="id" reference="SocialNetwork" allowEmpty >
              <SelectInput optionText="account" />
            </ReferenceInput>
          </DependentInput>
          <DependentInput resolve={detailsFor('socialNetworks')} scoped >
            <TextInput label="Account" source="account" source="account" validate={required} />
            <TextInput label="Url" source="url" source="url" allowEmpty />
            <ReferenceInput sortable={false} label="Type" source="type" reference="SocialNetworkType" allowEmpty  >
              <AutocompleteInput optionText="name" />
            </ReferenceInput>
          </DependentInput>
        </EmbeddedArrayInput>


        <EmbeddedArrayInput sortable={false} label="Phones" source="phonesValues" allowEmpty >
          <SelectInput
            source="phonesType"
            label="Expected to"
            choices={manyRelAction}
            defaultValue={actionType.USE}
          />
          <DependentInput resolve={selectorFor('phones')} scoped >
            <ReferenceInput sortable={false} label="Phone" source="id" reference="Phone" allowEmpty >
              <SelectInput optionText="phoneNumber" />
            </ReferenceInput>
          </DependentInput>
          <DependentInput resolve={detailsFor('phones')} scoped >
            <TextInput label="Phone number" source="phoneNumber" source="phoneNumber" validate={required} />
            <TextInput label="Type" source="type" source="type" allowEmpty />
            <TextInput label="Person" source="person" source="person" allowEmpty />
          </DependentInput>
        </EmbeddedArrayInput>


        <EmbeddedArrayInput sortable={false} label="Emails" source="emailsValues" allowEmpty >
          <SelectInput
            source="emailsType"
            label="Expected to"
            choices={manyRelAction}
            defaultValue={actionType.USE}
          />
          <DependentInput resolve={selectorFor('emails')} scoped >
            <ReferenceInput sortable={false} label="Email" source="id" reference="Email" allowEmpty >
              <SelectInput optionText="email" />
            </ReferenceInput>
          </DependentInput>
          <DependentInput resolve={detailsFor('emails')} scoped >
            <TextInput label="Email" source="email" source="email" validate={required} />
            <TextInput label="Type" source="type" source="type" allowEmpty />
            <TextInput label="Person" source="person" source="person" allowEmpty />
          </DependentInput>
        </EmbeddedArrayInput>

      </SimpleForm>);
  }
}


const formName = 'record-form';
const selector = formValueSelector(formName);
// сделать сразу с переводом...

export default compose(
  connect(
    state => ({
      user: selector(state, 'user'),
      userId: selector(state, 'userId'),
      userType: selector(state, 'userType'),
    }), {
      initForm: initForm('record-form', {
        user: {
          resource: 'User',
          single: true,
        },
        socialNetworks: {
          resource: 'SocialNetwork',
          single: false,
        },
        phones: {
          resource: 'Phone',
          single: false,
        },
        emails: {
          resource: 'Email',
          single: false,
        },
      }),
      finalizeForm,
    }),
)(Form);
