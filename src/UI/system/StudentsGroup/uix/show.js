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
import StudentsGroupTitle from "./title";
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
    Student,
  } = uix;
  return (
    <Show title={<StudentsGroupTitle />} {...props} >
      <SimpleShowLayout {...props}>
        <DependentField resolve={showIfExists('name')}>
          <TextField source="name" />
        </DependentField>

        <DependentField resolve={showIfNotEmptyRel('subjects')} source="subjects">
          <ReferenceManyField sortable={false} label="Subjects" reference="Subject" target="groups" allowEmpty >
            <Subject.Grid />
          </ReferenceManyField>
        </DependentField>

        <DependentField resolve={showIfNotEmptyRel('students')} source="students">
          <ReferenceManyField sortable={false} label="Students" reference="Student" target="group" allowEmpty >
            <Student.Grid />
          </ReferenceManyField>
        </DependentField>

      </SimpleShowLayout>
    </Show>
  );
};

