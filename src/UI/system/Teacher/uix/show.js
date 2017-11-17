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
import TeacherTitle from "./title";
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
    Subject,
  } = uix;
  return (
    <Show title={<TeacherTitle />} {...props} >
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

        <ReferenceManyField sortable={false} label="Subjects" reference="Subject" target="teacher" allowEmpty >
          <Subject.Grid />
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

