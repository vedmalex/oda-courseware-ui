import React from "react";
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

import {
  uix
} from "./../../";

// import { EmbeddedArrayField } from 'aor-embedded-array';
import UserTitle from "./title";
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

export default (props) => {
  const {
  } = uix;
  return (
    <Show title={<UserTitle />} {...props} >
      <SimpleShowLayout {...props}>
        <DependentField resolve={showIfExists('userName')}>
          <TextField label="User name" source="userName" />
        </DependentField>
        <DependentField resolve={showIfExists('isAdmin')}>
          <BooleanField label="Is admin" source="isAdmin" allowEmpty />
        </DependentField>
        <DependentField resolve={showIfExists('isSystem')}>
          <BooleanField label="Is system" source="isSystem" allowEmpty />
        </DependentField>
        <DependentField resolve={showIfExists('enabled')}>
          <BooleanField label="Enabled" source="enabled" allowEmpty />
        </DependentField>

        <DependentField resolve={showIfNotEmptyRel('asTeacherValues')} source="asTeacherValues">
          <EmbeddedArrayField reference="Teacher" target="user" sortable={false} label="As teacher" source="asTeacherValues" allowEmpty >
            <DependentField resolve={showIfExists('firstName')} source="firstName" scoped >
              <TextField source="firstName" label="First name" />
            </DependentField>
            <DependentField resolve={showIfExists('middleName')} source="middleName" scoped >
              <TextField source="middleName" label="Middle name" />
            </DependentField>
            <DependentField resolve={showIfExists('lastName')} source="lastName" scoped >
              <TextField source="lastName" label="Last name" />
            </DependentField>
          </EmbeddedArrayField>
        </DependentField>

        <DependentField resolve={showIfNotEmptyRel('asStudentValues')} source="asStudentValues">
          <EmbeddedArrayField reference="Student" target="user" sortable={false} label="As student" source="asStudentValues" allowEmpty >
            <DependentField resolve={showIfExists('firstName')} source="firstName" scoped >
              <TextField source="firstName" label="First name" />
            </DependentField>
            <DependentField resolve={showIfExists('middleName')} source="middleName" scoped >
              <TextField source="middleName" label="Middle name" />
            </DependentField>
            <DependentField resolve={showIfExists('lastName')} source="lastName" scoped >
              <TextField source="lastName" label="Last name" />
            </DependentField>
            <DependentField resolve={showIfExists('fullName')} source="fullName" scoped >
              <TextField source="fullName" label="Full name" allowEmpty />
            </DependentField>
            <DependentField resolve={showIfExists('uin')} source="uin" scoped >
              <TextField source="uin" label="Uin" />
            </DependentField>
            <DependentField resolve={showIfExists('ages')} source="ages" scoped >
              <TextField source="ages" label="Ages" allowEmpty />
            </DependentField>
            <DependentField resolve={showIfExists('dateOfBirth')} source="dateOfBirth" scoped >
              <DateField source="dateOfBirth" label="Date of birth" allowEmpty />
            </DependentField>
          </EmbeddedArrayField>
        </DependentField>

      </SimpleShowLayout>
    </Show>
  );
};

