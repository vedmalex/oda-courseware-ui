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
        <TextInput source="firstName" validate={required}  />
        <TextInput source="middleName" validate={required}  />
        <TextInput source="lastName" validate={required}  />
        <TextInput source="uin" validate={required}  />
        <DateInput source="dateOfBirth" allowEmpty  />

        <Label text="Profile" />
        <ReferenceInput sortable={false} label="" source="profileId" reference="StudentProfile" allowEmpty  >
          <AutocompleteInput optionText="id" />
        </ReferenceInput>

        <Label text="Group" />
        <ReferenceInput sortable={false} label="" source="groupId" reference="StudentsGroup" allowEmpty  >
          <AutocompleteInput optionText="name" />
        </ReferenceInput>


        <Label text="Followings" />
        <ReferenceArrayInput sortable={false} label="" source="followingsIds" reference="Student" allowEmpty >
          <SelectArrayInput options={{ fullWidth: true }} optionText="uin" optionValue="id" />
        </ReferenceArrayInput>


        <Label text="Followers" />
        <ReferenceArrayInput sortable={false} label="" source="followersIds" reference="Student" allowEmpty >
          <SelectArrayInput options={{ fullWidth: true }} optionText="uin" optionValue="id" />
        </ReferenceArrayInput>

      </SimpleForm>);
  }
}


const formName = 'record-form';
const selector = formValueSelector(formName);
// сделать сразу с переводом...

export default compose(
  connect(
    state => ({
    }), {
      initForm: initForm('record-form', {
      }),
      finalizeForm,
    }),
)(Form);
