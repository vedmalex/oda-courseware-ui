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
  TabbedForm,
  FormTab,
} from "admin-on-rest";

import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import compose from 'recompose/compose';
import { ui } from 'oda-aor-rest';
import { EmbeddedArrayInput, EmbeddedArrayField } from 'aor-embedded-array';

// import { DependentInput } from 'aor-dependent-input';
import DependentInput from './../../dependantInput';

const actionType = ui.consts.actionType;
const initForm = ui.actions.initForm;
const finalizeForm = ui.actions.finalizeForm;
const showRel = ui.showRel;

const showDetails = (filmsType) => true/* !!(filmsType && filmsType !== actionType.USE); */

class Form extends Component {
  componentWillMount() {
    this.props.initForm();
  }
  componentWillUnmount() {
    this.props.finalizeForm();
  }

  render() {
    const { props } = this;
    const homeworld = showRel('homeworld', props);
    const species = showRel('species', props);
    const singleRelActions = props.singleRelActions;
    const manyRelAction = props.manyRelActions;

    return (
      <TabbedForm {...props} >
        <FormTab label='general'>
          <EmbeddedArrayInput sortable={false} label="Films" source="filmsValues" allowEmpty >
            <TextInput label="Producer" source="producers" allowEmpty />
            <TextInput label="Release date" source="releaseDate" allowEmpty />
            <DependentInput resolve={showDetails} >
              <TextInput label="title" source="title" />
              <TextInput label="Director" source="director" />
            </DependentInput>
          </EmbeddedArrayInput>
          <DependentInput resolve={showDetails} >
            <TextInput label="Planet name" source="name" />
            <TextInput label="Planet diameter" source="diameter" />
            <EmbeddedArrayInput sortable={false} label="Films" source="filmsValues" allowEmpty >
              <TextInput label="Producer" source="producers" allowEmpty />
              <TextInput label="Release date" source="releaseDate" allowEmpty />
              <DependentInput resolve={showDetails} >
                <TextInput label="title" source="title" />
                <TextInput label="Director" source="director" />
              </DependentInput>
            </EmbeddedArrayInput>
          </DependentInput>
        </FormTab>
      </TabbedForm>);
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
