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
import StudentTitle from "./title";
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
    Student,
  } = uix;
  return (
    <Show title={<StudentTitle />} {...props} >
      <SimpleShowLayout {...props}>
        <DependentField resolve={showIfExists('firstName')}>
          <TextField label="First name" source="firstName" />
        </DependentField>
        <DependentField resolve={showIfExists('middleName')}>
          <TextField label="Middle name" source="middleName" />
        </DependentField>
        <DependentField resolve={showIfExists('lastName')}>
          <TextField label="Last name" source="lastName" />
        </DependentField>
        <DependentField resolve={showIfExists('fullName')}>
          <TextField label="Full name" source="fullName" allowEmpty />
        </DependentField>
        <DependentField resolve={showIfExists('uin')}>
          <TextField label="Uin" source="uin" />
        </DependentField>
        <DependentField resolve={showIfExists('ages')}>
          <TextField label="Ages" source="ages" allowEmpty />
        </DependentField>
        <DependentField resolve={showIfExists('dateOfBirth')}>
          <DateField label="Date of birth" source="dateOfBirth" allowEmpty />
        </DependentField>

        <DependentField resolve={showIfNotEmptyRel('profileId')} source="profile" >
          <EmbeddedRefField label="Profile" source="profileId" reference="StudentProfile" target="student">
            <DependentField resolve={showIfExists('maths')} scoped >
              <TextField source="maths" label="Maths" allowEmpty />
            </DependentField>
            <DependentField resolve={showIfExists('physics')} scoped >
              <TextField source="physics" label="Physics" allowEmpty />
            </DependentField>
            <DependentField resolve={showIfExists('language')} scoped >
              <TextField source="language" label="Language" allowEmpty />
            </DependentField>
          </EmbeddedRefField>
        </DependentField>

        <DependentField resolve={showIfNotEmptyRel('groupId')} source="groupId" >
          <ReferenceField sortable={false} label="Group" source="groupId" reference="StudentsGroup" allowEmpty >
            <TextField source="name" allowEmpty />
          </ReferenceField>
        </DependentField>

        <ReferenceManyField sortable={false} label="Followings" reference="Student" target="followers" allowEmpty >
          <Student.Grid />
        </ReferenceManyField>

        <ReferenceManyField sortable={false} label="Followers" reference="Student" target="followings" allowEmpty >
          <Student.Grid />
        </ReferenceManyField>

        <DependentField resolve={showIfNotEmptyRel('userId')} source="userId" >
          <ReferenceField sortable={false} label="User" source="userId" reference="User" allowEmpty >
            <TextField source="userName" allowEmpty />
          </ReferenceField>
        </DependentField>

      </SimpleShowLayout>
    </Show>
  );
};

