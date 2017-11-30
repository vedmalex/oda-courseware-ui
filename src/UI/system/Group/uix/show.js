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
  const Title = uix.Group.Title;
  const {
    Student,
  } = uix;
  return (
    <Show title={<Title />} {...props} >
      <SimpleShowLayout {...props}>
        <DependentField resolve={showIfExists('name')}>
          <TextField label="Name" source="name" />
        </DependentField>

        <ReferenceManyField label="Students" reference="Student" target="group" allowEmpty >
          <Student.Grid />
        </ReferenceManyField>

        <DependentField resolve={showIfNotEmptyRel('curatorId')} source="curatorId" >
          <ReferenceField label="Curator" source="curatorId" reference="Curator" allowEmpty linkType="show" >
            <TextField source="id" allowEmpty />
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