import React from "react";
import PropTypes from 'prop-types';
import {
  Datagrid,
  TextField,
  DateField,
  NumberField,
  FunctionField,
  BooleanField,
  EditButton,
  ReferenceManyField,
  ReferenceField,
  Show,
  SimpleShowLayout,
  required,
} from "admin-on-rest";

// import { EmbeddedArrayField } from 'aor-embedded-array';
import { ui } from 'oda-aor-rest';

const {
  DependentField,
  EmbeddedField,
  GrouppedField,
  EmbeddedArrayField,
  EmbeddedRefArrayField,
  EmbeddedRefField,
} = ui.components;

const showIfExists = field => root => !!root[field];

const showIfNotEmptyRel = field => root => !!root[field] || (Array.isArray(root[field]) && root[field].length > 0);

const ShowView = (props, context) => {
  const { uix } = context;
  const Title = uix.Person.Title;
  const {
    Student,
  } = uix;
  return (
    <Show title={<Title />} {...props} >
      <SimpleShowLayout {...props}>
        <DependentField resolve={showIfExists('spiritualName')}>
          <TextField label="Spiritual name" source="spiritualName" />
        </DependentField>
        <DependentField resolve={showIfExists('fullName')}>
          <TextField label="Full name" source="fullName" />
        </DependentField>
        <DependentField resolve={showIfExists('dateOfBirth')}>
          <DateField label="Date of birth" source="dateOfBirth" allowEmpty />
        </DependentField>
        <DependentField resolve={showIfExists('ages')}>
          <TextField label="Ages" source="ages" allowEmpty />
        </DependentField>
        <DependentField resolve={showIfExists('specialNotes')}>
          <TextField label="Special notes" source="specialNotes" allowEmpty />
        </DependentField>

        <DependentField resolve={showIfNotEmptyRel('userId')} source="user" >
          <EmbeddedRefField label="User" source="userId" reference="User" target="id">
            <DependentField resolve={showIfExists('userName')} scoped >
              <TextField source="userName" label="User name" />
            </DependentField>
            <DependentField resolve={showIfExists('password')} scoped >
              <TextField source="password" label="Password" />
            </DependentField>
            <DependentField resolve={showIfExists('isAdmin')} scoped >
              <BooleanField source="isAdmin" label="Is admin" allowEmpty />
            </DependentField>
            <DependentField resolve={showIfExists('isSystem')} scoped >
              <BooleanField source="isSystem" label="Is system" allowEmpty />
            </DependentField>
            <DependentField resolve={showIfExists('enabled')} scoped >
              <BooleanField source="enabled" label="Enabled" allowEmpty />
            </DependentField>
          </EmbeddedRefField>
        </DependentField>

        <DependentField resolve={showIfNotEmptyRel('socialNetworksValues')} source="socialNetworksValues">
          <EmbeddedArrayField reference="SocialNetwork" target="person" label="Social networks" source="socialNetworksValues" allowEmpty >
            <DependentField resolve={showIfExists('account')} source="account" scoped >
              <TextField source="account" label="Account" />
            </DependentField>
            <DependentField resolve={showIfExists('url')} source="url" scoped >
              <TextField source="url" label="Url" allowEmpty />
            </DependentField>
          </EmbeddedArrayField>
        </DependentField>

        <DependentField resolve={showIfNotEmptyRel('phonesValues')} source="phonesValues">
          <EmbeddedArrayField reference="Phone" target="person" label="Phones" source="phonesValues" allowEmpty >
            <DependentField resolve={showIfExists('phoneNumber')} source="phoneNumber" scoped >
              <TextField source="phoneNumber" label="Phone number" />
            </DependentField>
          </EmbeddedArrayField>
        </DependentField>

        <DependentField resolve={showIfNotEmptyRel('emailsValues')} source="emailsValues">
          <EmbeddedArrayField reference="Email" target="person" label="Emails" source="emailsValues" allowEmpty >
            <DependentField resolve={showIfExists('email')} source="email" scoped >
              <TextField source="email" label="Email" />
            </DependentField>
          </EmbeddedArrayField>
        </DependentField>

        <ReferenceManyField label="As students" reference="Student" target="person" allowEmpty >
          <Student.Grid />
        </ReferenceManyField>

        <DependentField resolve={showIfNotEmptyRel('asCuratorId')} source="asCuratorId" >
          <ReferenceField label="As curator" source="asCuratorId" reference="Curator" allowEmpty linkType="show" >
            <TextField source="id" allowEmpty />
          </ReferenceField>
        </DependentField>

      </SimpleShowLayout>
    </Show>
  );
};

ShowView.contextTypes = {
  uix: PropTypes.object.isRequired,
}

export default ShowView;