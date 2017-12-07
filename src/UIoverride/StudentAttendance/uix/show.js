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
  const Title = uix.StudentAttendance.Title;
  const { translate } = context;
  return (
    <Show title={<Title />} {...props} >
      <SimpleShowLayout {...props}>
        <DependentField resolve={showIfExists('meeting')}>
          <TextField label="resources.StudentAttendance.fields.meeting" source="meeting" />
        </DependentField>
        <DependentField resolve={showIfExists('student')}>
          <TextField label="resources.StudentAttendance.fields.student" source="student" />
        </DependentField>
        <DependentField resolve={showIfExists('present')}>
          <BooleanField label="resources.StudentAttendance.fields.present" source="present" allowEmpty />
        </DependentField>
        <DependentField resolve={showIfExists('specialNotes')}>
          <TextField label="resources.StudentAttendance.fields.specialNotes" source="specialNotes" allowEmpty />
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