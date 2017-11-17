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


        <Label text="Subjects" />
        <ReferenceArrayInput sortable={false} label="" source="subjectsIds" reference="Subject" allowEmpty >
          <SelectArrayInput options={{ fullWidth: true }} optionText="name" optionValue="id" />
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
    }), {
      initForm: initForm('record-form', {
      }),
      finalizeForm,
    }),
)(Form);
