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
import SubjectTitle from "./title";
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
    StudentsGroup,
  } = uix;
  return (
    <Show title={<SubjectTitle />} {...props} >
      <SimpleShowLayout {...props}>
        <DependentField resolve={showIfExists('name')}>
          <TextField source="name" />
        </DependentField>

        <DependentField resolve={showIfNotEmptyRel('groups')} source="groups">
          <ReferenceManyField sortable={false} label="Groups" reference="StudentsGroup" target="subjects" allowEmpty >
            <StudentsGroup.Grid />
          </ReferenceManyField>
        </DependentField>

        <DependentField resolve={showIfNotEmptyRel('teacherId')} source="teacherId" >
          <ReferenceField sortable={false} label="Teacher" source="teacherId" reference="Teacher" allowEmpty >
            <TextField source="id" allowEmpty />
          </ReferenceField>
        </DependentField>

      </SimpleShowLayout>
    </Show>
  );
};

