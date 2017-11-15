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
        <TextInput source="name" validate={required} />
        <TextInput source="birthYear" allowEmpty />
        <TextInput source="eyeColor" allowEmpty />
        <TextInput source="gender" allowEmpty />
        <TextInput source="hairColor" allowEmpty />
        <NumberInput source="height" allowEmpty />
        <NumberInput source="mass" allowEmpty />
        <TextInput source="skinColor" allowEmpty />
        <DateInput source="created" allowEmpty />
        <DateInput source="edited" allowEmpty />
        <TextInput source="owner" allowEmpty />
        <DateInput source="createdAt" allowEmpty />
        <DateInput source="updatedAt" allowEmpty />
        <BooleanInput source="removed" allowEmpty />

        <Label text="Homeworld" />
        <DependentInput resolve={selectorFor('homeworld')} scoped >
          <ReferenceInput sortable={false} label="Homeworld" source="homeworldId" reference="Planet" allowEmpty  >
            <AutocompleteInput optionText="name" />
          </ReferenceInput>
        </DependentInput>
        <SelectInput
          source="homeworldType"
          label="Expected to"
          choices={singleRelActions}
          defaultValue={actionType.USE}
        />

        <DependentInput resolve={detailsFor('homeworld')} >
          <EmbeddedInput label="Homeworld" source="homeworld" addLabel={false}>
            <TextInput label="Name" source="name" source="name" validate={required} />
            <NumberInput label="Diameter" source="diameter" source="diameter" allowEmpty />
            <NumberInput label="RotationPeriod" source="rotationPeriod" source="rotationPeriod" allowEmpty />
            <NumberInput label="OrbitalPeriod" source="orbitalPeriod" source="orbitalPeriod" allowEmpty />
            <TextInput label="Gravity" source="gravity" source="gravity" allowEmpty />
            <NumberInput label="Population" source="population" source="population" allowEmpty />
            <TextInput label="Climates" source="climates" source="climates" allowEmpty />
            <TextInput label="Terrains" source="terrains" source="terrains" allowEmpty />
            <TextInput label="SurfaceWater" source="surfaceWater" source="surfaceWater" allowEmpty />
            <DateInput label="Created" source="created" source="created" allowEmpty />
            <DateInput label="Edited" source="edited" source="edited" allowEmpty />
            <TextInput label="Owner" source="owner" source="owner" allowEmpty />
            <DateInput label="CreatedAt" source="createdAt" source="createdAt" allowEmpty />
            <DateInput label="UpdatedAt" source="updatedAt" source="updatedAt" allowEmpty />
            <BooleanInput label="Removed" source="removed" source="removed" allowEmpty />
          </EmbeddedInput>
        </DependentInput>


        <Label text="Films" />
        <ReferenceArrayInput sortable={false} label="" source="filmsIds" reference="Film" allowEmpty >
          <SelectArrayInput options={{ fullWidth: true }} optionText="title" optionValue="id" />
        </ReferenceArrayInput>

        <Label text="Species" />
        <DependentInput resolve={selectorFor('species')} scoped >
          <ReferenceInput sortable={false} label="Species" source="speciesId" reference="Species" allowEmpty  >
            <AutocompleteInput optionText="name" />
          </ReferenceInput>
        </DependentInput>
        <SelectInput
          source="speciesType"
          label="Expected to"
          choices={singleRelActions}
          defaultValue={actionType.USE}
        />

        <DependentInput resolve={detailsFor('species')} >
          <EmbeddedInput label="Species" source="species" addLabel={false}>
            <TextInput label="Name" source="name" source="name" validate={required} />
            <TextInput label="Classification" source="classification" source="classification" allowEmpty />
            <TextInput label="Designation" source="designation" source="designation" allowEmpty />
            <NumberInput label="AverageHeight" source="averageHeight" source="averageHeight" allowEmpty />
            <NumberInput label="AverageLifespan" source="averageLifespan" source="averageLifespan" allowEmpty />
            <TextInput label="EyeColors" source="eyeColors" source="eyeColors" allowEmpty />
            <TextInput label="HairColors" source="hairColors" source="hairColors" allowEmpty />
            <TextInput label="SkinColors" source="skinColors" source="skinColors" allowEmpty />
            <TextInput label="Language" source="language" source="language" allowEmpty />
            <DateInput label="Created" source="created" source="created" allowEmpty />
            <DateInput label="Edited" source="edited" source="edited" allowEmpty />
            <TextInput label="Owner" source="owner" source="owner" allowEmpty />
            <DateInput label="CreatedAt" source="createdAt" source="createdAt" allowEmpty />
            <DateInput label="UpdatedAt" source="updatedAt" source="updatedAt" allowEmpty />
            <BooleanInput label="Removed" source="removed" source="removed" allowEmpty />
          </EmbeddedInput>
        </DependentInput>


        <EmbeddedArrayInput sortable={false} label="Starships" source="starshipsValues" allowEmpty >
          <SelectInput
            source="starshipsType"
            label="Expected to"
            choices={manyRelAction}
            defaultValue={actionType.USE}
          />
          <DependentInput resolve={selectorFor('starships')} scoped >
            <ReferenceInput sortable={false} label="Starship" source="id" reference="Starship" allowEmpty >
              <SelectInput optionText="name" />
            </ReferenceInput>
          </DependentInput>
          <DependentInput resolve={detailsFor('starships')} scoped >
            <TextInput label="Name" source="name" source="name" validate={required} />
            <TextInput label="Model" source="model" source="model" allowEmpty />
            <TextInput label="StarshipClass" source="starshipClass" source="starshipClass" allowEmpty />
            <TextInput label="Manufacturers" source="manufacturers" source="manufacturers" allowEmpty />
            <NumberInput label="CostInCredits" source="costInCredits" source="costInCredits" allowEmpty />
            <NumberInput label="Length" source="length" source="length" allowEmpty />
            <TextInput label="Crew" source="crew" source="crew" allowEmpty />
            <TextInput label="Passengers" source="passengers" source="passengers" allowEmpty />
            <NumberInput label="MaxAtmospheringSpeed" source="maxAtmospheringSpeed" source="maxAtmospheringSpeed" allowEmpty />
            <NumberInput label="HyperdriveRating" source="hyperdriveRating" source="hyperdriveRating" allowEmpty />
            <NumberInput label="MGLT" source="mGLT" source="mGLT" allowEmpty />
            <NumberInput label="CargoCapacity" source="cargoCapacity" source="cargoCapacity" allowEmpty />
            <TextInput label="Consumables" source="consumables" source="consumables" allowEmpty />
            <DateInput label="Created" source="created" source="created" allowEmpty />
            <DateInput label="Edited" source="edited" source="edited" allowEmpty />
            <TextInput label="Owner" source="owner" source="owner" allowEmpty />
            <DateInput label="CreatedAt" source="createdAt" source="createdAt" allowEmpty />
            <DateInput label="UpdatedAt" source="updatedAt" source="updatedAt" allowEmpty />
            <BooleanInput label="Removed" source="removed" source="removed" allowEmpty />
          </DependentInput>
        </EmbeddedArrayInput>


        <Label text="Vehicles" />
        <ReferenceArrayInput sortable={false} label="" source="vehiclesIds" reference="Vehicle" allowEmpty >
          <SelectArrayInput options={{ fullWidth: true }} optionText="name" optionValue="id" />
        </ReferenceArrayInput>

        <Label text="CreatedBy" />
        <ReferenceInput sortable={false} label="" source="createdById" reference="User" allowEmpty  >
          <AutocompleteInput optionText="userName" />
        </ReferenceInput>

        <Label text="UpdateBy" />
        <ReferenceInput sortable={false} label="" source="updateById" reference="User" allowEmpty  >
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
      homeworld: selector(state, 'homeworld'),
      homeworldId: selector(state, 'homeworldId'),
      homeworldType: selector(state, 'homeworldType'),
      species: selector(state, 'species'),
      speciesId: selector(state, 'speciesId'),
      speciesType: selector(state, 'speciesType'),
    }), {
      initForm: initForm('record-form', {
        homeworld: {
          resource: 'Planet',
          single: true,
        },
        species: {
          resource: 'Species',
          single: true,
        },
        starships: {
          resource: 'Starship',
          single: false,
        },
      }),
      finalizeForm,
    }),
)(Form);
