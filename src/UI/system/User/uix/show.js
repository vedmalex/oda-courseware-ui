import React from "react";
import PropTypes from 'prop-types';
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

// import { EmbeddedArrayField } from 'aor-embedded-array';
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

const ShowView = (props, context) => {
  const { uix } = context.uix;
  const Title = uix.User.Title;
  return (
    <Show title={<Title />} {...props} >
      <SimpleShowLayout {...props}>
        <DependentField resolve={showIfExists('userName')}>
          <TextField label="User name" source="userName" />
        </DependentField>
        <DependentField resolve={showIfExists('isAdmin')}>
          <BooleanField label="Is admin" source="isAdmin" allowEmpty />
        </DependentField>
        <DependentField resolve={showIfExists('isSystem')}>
          <BooleanField label="Is system" source="isSystem" allowEmpty />
        </DependentField>
        <DependentField resolve={showIfExists('enabled')}>
          <BooleanField label="Enabled" source="enabled" allowEmpty />
        </DependentField>

      </SimpleShowLayout>
    </Show>
  );
};

ShowView.contextTypes = {
  uix: PropTypes.object.isRequired,
}

export default ShowView;