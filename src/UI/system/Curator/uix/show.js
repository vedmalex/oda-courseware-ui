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
import CuratorTitle from "./title";
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
    Group,
  } = uix;
  return (
    <Show title={<CuratorTitle />} {...props} >
      <SimpleShowLayout {...props}>

        <DependentField resolve={showIfNotEmptyRel('personId')} source="personId" >
          <ReferenceField sortable={false} label="Person" source="personId" reference="Person" allowEmpty linkType="show" >
            <TextField source="fullName" allowEmpty />
          </ReferenceField>
        </DependentField>

        <ReferenceManyField sortable={false} label="Groups" reference="Group" target="curator" allowEmpty >
          <Group.Grid />
        </ReferenceManyField>

      </SimpleShowLayout>
    </Show>
  );
};

