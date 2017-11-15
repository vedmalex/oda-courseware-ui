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
          <TextField source="firstName" />
        </DependentField>
        <DependentField resolve={showIfExists('middleName')}>
          <TextField source="middleName" />
        </DependentField>
        <DependentField resolve={showIfExists('lastName')}>
          <TextField source="lastName" />
        </DependentField>
        <DependentField resolve={showIfExists('uin')}>
          <TextField source="uin" />
        </DependentField>
        <DependentField resolve={showIfExists('dateOfBirth')}>
          <DateField source="dateOfBirth" allowEmpty />
        </DependentField>

        <DependentField resolve={showIfNotEmptyRel('profileId')} source="profileId" >
          <ReferenceField sortable={false} label="Profile" source="profileId" reference="StudentProfile" allowEmpty >
            <TextField source="id" allowEmpty />
          </ReferenceField>
        </DependentField>

        <DependentField resolve={showIfNotEmptyRel('groupId')} source="groupId" >
          <ReferenceField sortable={false} label="Group" source="groupId" reference="StudentsGroup" allowEmpty >
            <TextField source="name" allowEmpty />
          </ReferenceField>
        </DependentField>

        <DependentField resolve={showIfNotEmptyRel('followings')} source="followings">
          <ReferenceManyField sortable={false} label="Followings" reference="Student" target="followers" allowEmpty >
            <Student.Grid />
          </ReferenceManyField>
        </DependentField>

        <DependentField resolve={showIfNotEmptyRel('followers')} source="followers">
          <ReferenceManyField sortable={false} label="Followers" reference="Student" target="followings" allowEmpty >
            <Student.Grid />
          </ReferenceManyField>
        </DependentField>

      </SimpleShowLayout>
    </Show>
  );
};

