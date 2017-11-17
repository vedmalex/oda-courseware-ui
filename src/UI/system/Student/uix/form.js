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
        <TextInput label="First name" source="firstName" validate={required}  />
        <TextInput label="Middle name" source="middleName" validate={required}  />
        <TextInput label="Last name" source="lastName" validate={required}  />
        <TextInput label="Uin" source="uin" validate={required}  />
        <DateInput label="Date of birth" source="dateOfBirth" allowEmpty  />

        <Label text="Profile" />
        <DependentInput resolve={selectorFor('profile')} scoped >
          <ReferenceInput sortable={false} label="Profile" source="profileId" reference="StudentProfile" allowEmpty  >
            <AutocompleteInput optionText="id" />
          </ReferenceInput>
        </DependentInput>
        <SelectInput
          source="profileType"
          label="Expected to"
          choices={singleRelActions}
          defaultValue={actionType.USE}
        />

        <DependentInput resolve={detailsFor('profile')} >
          <EmbeddedInput label="Profile" source="profile" addLabel={false}>
            <NumberInput label="Maths" source="maths" source="maths" allowEmpty />
            <NumberInput label="Physics" source="physics" source="physics" allowEmpty />
            <NumberInput label="Language" source="language" source="language" allowEmpty />
          </EmbeddedInput>
        </DependentInput>

        <Label text="Group" />
        <ReferenceInput sortable={false} label="" source="groupId" reference="StudentsGroup" allowEmpty  >
          <AutocompleteInput optionText="name" />
        </ReferenceInput>


        <Label text="Followings" />
        <ReferenceArrayInput sortable={false} label="" source="followingsIds" reference="Student" allowEmpty >
          <SelectArrayInput options={{ fullWidth: true }} optionText="fullName" optionValue="id" />
        </ReferenceArrayInput>


        <Label text="Followers" />
        <ReferenceArrayInput sortable={false} label="" source="followersIds" reference="Student" allowEmpty >
          <SelectArrayInput options={{ fullWidth: true }} optionText="fullName" optionValue="id" />
        </ReferenceArrayInput>

        <Label text="User" />
        <ReferenceInput sortable={false} label="" source="userId" reference="User" allowEmpty  >
          <AutocompleteInput optionText="userName" />
        </ReferenceInput>

      </SimpleForm>);
  }
}


const formName = 'record-form';
const selector = formValueSelector(formName);
// сделать сразу с переводом...

export default compose(
  connect(
    state => ({
      profile: selector(state, 'profile'),
      profileId: selector(state, 'profileId'),
      profileType: selector(state, 'profileType'),
    }), {
      initForm: initForm('record-form', {
        profile: {
          resource: 'StudentProfile',
          single: true,
        },
      }),
      finalizeForm,
    }),
)(Form);
