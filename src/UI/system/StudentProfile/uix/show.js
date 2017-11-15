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
import StudentProfileTitle from "./title";
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
    <Show title={<StudentProfileTitle />} {...props} >
      <SimpleShowLayout {...props}>
        <DependentField resolve={showIfExists('maths')}>
          <TextField source="maths" allowEmpty />
        </DependentField>
        <DependentField resolve={showIfExists('physics')}>
          <TextField source="physics" allowEmpty />
        </DependentField>
        <DependentField resolve={showIfExists('language')}>
          <TextField source="language" allowEmpty />
        </DependentField>

        <DependentField resolve={showIfNotEmptyRel('studentId')} source="studentId" >
          <ReferenceField sortable={false} label="Student" source="studentId" reference="Student" allowEmpty >
            <TextField source="uin" allowEmpty />
          </ReferenceField>
        </DependentField>

      </SimpleShowLayout>
    </Show>
  );
};

