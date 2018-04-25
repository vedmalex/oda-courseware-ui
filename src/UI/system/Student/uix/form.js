import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  SimpleForm,
  TextInput,
  LongTextInput,
  DateInput,
  NumberInput,
  BooleanInput,
  required,
} from "admin-on-rest";
import RichTextInput from 'aor-rich-text-input';

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
    const { translate } = this.context;
    return (
      <SimpleForm {...props} >

        <ReferenceInput label="resources.Student.fields.person" source="personId" reference="system/Person" allowEmpty >
          <AutocompleteInput optionText="fullName" />
        </ReferenceInput>

        <ReferenceInput label="resources.Student.fields.group" source="groupId" reference="system/Group" allowEmpty >
          <AutocompleteInput optionText="name" />
        </ReferenceInput>


        <ReferenceArrayInput label="resources.Student.fields.meetings" source="#w{f.field}Ids" reference="system/Meeting" allowEmpty >
          <SelectArrayInput options={{ fullWidth: true }} optionText="date" optionValue="id" />
        </ReferenceArrayInput>

      </SimpleForm>);
  }
}

const formName = 'record-form';
const selector = formValueSelector(formName);

Form.contextTypes = {
  translate: PropTypes.func.isRequired,
}

export default compose(
  connect(
    state => ({
    }), {
      initForm: initForm('record-form', {
      }),
      finalizeForm,
    }),
)(Form);
