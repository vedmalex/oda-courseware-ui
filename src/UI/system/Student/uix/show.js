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
  const { uix } = context;
  const Title = uix.Student.Title;
  return (
    <Show title={<Title />} {...props} >
      <SimpleShowLayout {...props}>

        <DependentField resolve={showIfNotEmptyRel('personId')} source="personId" >
          <ReferenceField label="Person" source="personId" reference="Person" allowEmpty linkType="show" >
            <TextField source="fullName" allowEmpty />
          </ReferenceField>
        </DependentField>

        <DependentField resolve={showIfNotEmptyRel('groupId')} source="groupId" >
          <ReferenceField label="Group" source="groupId" reference="Group" allowEmpty linkType="show" >
            <TextField source="name" allowEmpty />
          </ReferenceField>
        </DependentField>

      </SimpleShowLayout>
    </Show>
  );
};

ShowView.contextTypes = {
  uix: PropTypes.object.isRequired,
}

export default ShowView;