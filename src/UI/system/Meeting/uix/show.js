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
  const Title = uix.Meeting.Title;
  const { translate } = context;
  const {
  } = uix;
  return (
    <Show title={<Title />} {...props} >
      <SimpleShowLayout {...props}>
        <DependentField resolve={showIfExists('date')}>
          <DateField label="resources.Meeting.fields.date" source="date" allowEmpty />
        </DependentField>

        <DependentField resolve={showIfNotEmptyRel('curatorId')} source="curatorId" >
          <ReferenceField label="resources.Meeting.fields.curator" source="curatorId" reference="Curator" allowEmpty linkType="show" >
            <TextField source="id" allowEmpty />
          </ReferenceField>
        </DependentField>

        <DependentField resolve={showIfNotEmptyRel('groupId')} source="groupId" >
          <ReferenceField label="resources.Meeting.fields.group" source="groupId" reference="Group" allowEmpty linkType="show" >
            <TextField source="name" allowEmpty />
          </ReferenceField>
        </DependentField>

        <DependentField resolve={showIfNotEmptyRel('studentsValues')} source="studentsValues">
          <EmbeddedArrayField reference="Student" target="meetings" label="resources.Meeting.fields.students" source="studentsValues" allowEmpty >
          </EmbeddedArrayField>
        </DependentField>

      </SimpleShowLayout>
    </Show>
  );
};

ShowView.contextTypes = {
  uix: PropTypes.object.isRequired,
  translate: PropTypes.func.isRequired,
}

export default ShowView;
