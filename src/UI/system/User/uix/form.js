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
        <TextInput label="User name" source="userName" validate={required}  />
        <TextInput label="Password" source="password" validate={required}  />
        <BooleanInput label="Is admin" source="isAdmin" allowEmpty  />
        <BooleanInput label="Is system" source="isSystem" allowEmpty  />
        <BooleanInput label="Enabled" source="enabled" allowEmpty  />


        <EmbeddedArrayInput sortable={false} label="As teacher" source="asTeacherValues" allowEmpty >
          <SelectInput
            source="asTeacherType"
            label="Expected to"
            choices={manyRelAction}
            defaultValue={actionType.USE}
          />
          <DependentInput resolve={selectorFor('asTeacher')} scoped >
            <ReferenceInput sortable={false} label="Teacher" source="id" reference="Teacher" allowEmpty >
              <SelectInput optionText="lastName" />
            </ReferenceInput>
          </DependentInput>
          <DependentInput resolve={detailsFor('asTeacher')} scoped >
            <TextInput label="First name" source="firstName" source="firstName" validate={required} />
            <TextInput label="Middle name" source="middleName" source="middleName" validate={required} />
            <TextInput label="Last name" source="lastName" source="lastName" validate={required} />
          </DependentInput>
        </EmbeddedArrayInput>


        <EmbeddedArrayInput sortable={false} label="As student" source="asStudentValues" allowEmpty >
          <SelectInput
            source="asStudentType"
            label="Expected to"
            choices={manyRelAction}
            defaultValue={actionType.USE}
          />
          <DependentInput resolve={selectorFor('asStudent')} scoped >
            <ReferenceInput sortable={false} label="Student" source="id" reference="Student" allowEmpty >
              <SelectInput optionText="fullName" />
            </ReferenceInput>
          </DependentInput>
          <DependentInput resolve={detailsFor('asStudent')} scoped >
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
        asTeacher: {
          resource: 'Teacher',
          single: false,
        },
        asStudent: {
          resource: 'Student',
          single: false,
        },
      }),
      finalizeForm,
    }),
)(Form);
