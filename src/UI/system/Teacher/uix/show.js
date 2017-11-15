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
          <TextField source="firstName" />
        </DependentField>
        <DependentField resolve={showIfExists('middleName')}>
          <TextField source="middleName" />
        </DependentField>
        <DependentField resolve={showIfExists('lastName')}>
          <TextField source="lastName" />
        </DependentField>

        <DependentField resolve={showIfNotEmptyRel('subjects')} source="subjects">
          <ReferenceManyField sortable={false} label="Subjects" reference="Subject" target="teacher" allowEmpty >
            <Subject.Grid />
          </ReferenceManyField>
        </DependentField>

      </SimpleShowLayout>
    </Show>
  );
};

