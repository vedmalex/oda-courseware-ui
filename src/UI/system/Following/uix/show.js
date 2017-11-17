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
import FollowingTitle from "./title";
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
    <Show title={<FollowingTitle />} {...props} >
      <SimpleShowLayout {...props}>
        <DependentField resolve={showIfExists('followers')}>
          <TextField label="Followers" source="followers" />
        </DependentField>
        <DependentField resolve={showIfExists('followings')}>
          <TextField label="Followings" source="followings" />
        </DependentField>

      </SimpleShowLayout>
    </Show>
  );
};

