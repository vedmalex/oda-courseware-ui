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
import StudentsGroupSubjectTitle from "./title";
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
  return (
    <Show title={<StudentsGroupSubjectTitle />} {...props} >
      <SimpleShowLayout {...props}>
        <DependentField resolve={showIfExists('subject')}>
          <TextField label="Subject" source="subject" />
        </DependentField>
        <DependentField resolve={showIfExists('studentsGroup')}>
          <TextField label="Students group" source="studentsGroup" />
        </DependentField>

      </SimpleShowLayout>
    </Show>
  );
};

