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
        <TextInput label="Name" source="name" validate={required}  />


        <EmbeddedArrayInput sortable={false} label="Subjects" source="subjectsValues" allowEmpty >
          <SelectInput
            source="subjectsType"
            label="Expected to"
            choices={manyRelAction}
            defaultValue={actionType.USE}
          />
          <DependentInput resolve={selectorFor('subjects')} scoped >
            <ReferenceInput sortable={false} label="Subject" source="id" reference="Subject" allowEmpty >
              <SelectInput optionText="name" />
            </ReferenceInput>
          </DependentInput>
          <DependentInput resolve={detailsFor('subjects')} scoped >
            <TextInput label="Name" source="name" source="name" validate={required} />
          </DependentInput>
        </EmbeddedArrayInput>


        <EmbeddedArrayInput sortable={false} label="Students" source="studentsValues" allowEmpty >
          <SelectInput
            source="studentsType"
            label="Expected to"
            choices={manyRelAction}
            defaultValue={actionType.USE}
          />
          <DependentInput resolve={selectorFor('students')} scoped >
            <ReferenceInput sortable={false} label="Student" source="id" reference="Student" allowEmpty >
              <SelectInput optionText="fullName" />
            </ReferenceInput>
          </DependentInput>
          <DependentInput resolve={detailsFor('students')} scoped >
            <TextInput label="First name" source="firstName" source="firstName" validate={required} />
            <TextInput label="Middle name" source="middleName" source="middleName" validate={required} />
            <TextInput label="Last name" source="lastName" source="lastName" validate={required} />
            <TextInput label="Full name" source="fullName" source="fullName" allowEmpty />
            <TextInput label="Uin" source="uin" source="uin" validate={required} />
            <NumberInput label="Ages" source="ages" source="ages" allowEmpty />
            <DateInput label="Date of birth" source="dateOfBirth" source="dateOfBirth" allowEmpty />
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
    }), {
      initForm: initForm('record-form', {
        subjects: {
          resource: 'Subject',
          single: false,
        },
        students: {
          resource: 'Student',
          single: false,
        },
      }),
      finalizeForm,
    }),
)(Form);
