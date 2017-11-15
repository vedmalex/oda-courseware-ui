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
  return (
    <Show title={<UserTitle />} {...props} >
      <SimpleShowLayout {...props}>
        <DependentField resolve={showIfExists('userName')}>
          <TextField source="userName" />
        </DependentField>
        <DependentField resolve={showIfExists('password')}>
          <TextField source="password" />
        </DependentField>
        <DependentField resolve={showIfExists('isAdmin')}>
          <BooleanField source="isAdmin" allowEmpty />
        </DependentField>
        <DependentField resolve={showIfExists('isSystem')}>
          <BooleanField source="isSystem" allowEmpty />
        </DependentField>
        <DependentField resolve={showIfExists('enabled')}>
          <BooleanField source="enabled" allowEmpty />
        </DependentField>

      </SimpleShowLayout>
    </Show>
  );
};

