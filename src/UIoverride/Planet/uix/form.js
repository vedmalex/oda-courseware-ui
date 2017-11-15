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
import { EmbeddedArrayInput } from 'aor-embedded-array';

const { DependentInput, EmbeddedInput, GrouppedInput, Label } = ui.components;

const actionType = ui.consts.actionType;
const initForm = ui.actions.initForm;
const finalizeForm = ui.actions.finalizeForm;
const showRel = ui.showRel;

const showDetailsFor = (relName) => {
  const relType = `${relName}Type`;
  return (root) => !!(root && root[relType] && root[relType] !== actionType.USE && root[relType] !== actionType.UNLINK)
}

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
          <TextInput label="Title" source="name" />
          <TextInput source="name" />
          <NumberInput source="diameter" allowEmpty />
          <NumberInput source="rotationPeriod" allowEmpty />
          <NumberInput source="orbitalPeriod" allowEmpty />
          <TextInput source="gravity" allowEmpty />
          <NumberInput source="population" allowEmpty />
          <TextInput source="climates" allowEmpty />
          <TextInput source="terrains" allowEmpty />
          <TextInput source="surfaceWater" allowEmpty />
          <DateInput source="created" allowEmpty />
          <DateInput source="edited" allowEmpty />
          <TextInput source="owner" allowEmpty />
          <DateInput source="createdAt" allowEmpty />
          <DateInput source="updatedAt" allowEmpty />
          <BooleanInput source="removed" allowEmpty />
        </FormTab>
        <FormTab label='relations'>
          <ReferenceArrayInput sortable={false} label="Residents" source="residentsIds" reference="Person" allowEmpty >
            <SelectArrayInput options={{ fullWidth: true }} optionText="name" optionValue="id" />
          </ReferenceArrayInput>

          <EmbeddedArrayInput sortable={false} label="Films" source="filmsValues" allowEmpty >
            <SelectInput
              source="filmsType"
              label="Expected to"
              choices={manyRelAction}
              defaultValue={actionType.USE}
            />
            <ReferenceInput sortable={false} label="Films" source="id" reference="Film" allowEmpty >
              <SelectInput optionText="title" />
            </ReferenceInput>
            <DependentInput resolve={showDetailsFor('films')} scoped >
              <TextInput label="Title" source="title" />
              <NumberInput label="Episode" source="episodeID" allowEmpty />
              <TextInput label="OpenCrowl" source="openingCrawl" allowEmpty />
              <TextInput label="Director" source="director" allowEmpty />
              <TextInput label="Producer" source="producers" allowEmpty />
              <TextInput label="Release date" source="releaseDate" allowEmpty />
            </DependentInput>
          </EmbeddedArrayInput>

          <ReferenceInput sortable={false} label="CreatedBy" source="createdById" reference="User" allowEmpty >
            <SelectInput optionText="username" />
          </ReferenceInput>
          <ReferenceInput sortable={false} label="UpdateBy" source="updateById" reference="User" allowEmpty >
            <SelectInput optionText="username" />
          </ReferenceInput>
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
