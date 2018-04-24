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
  // ReferenceManyField,
  ReferenceField,
  Show,
  SimpleShowLayout,
  required,
  RichTextField,
} from "admin-on-rest";

// import { EmbeddedArrayField } from 'aor-embedded-array';
import { ui } from 'oda-aor-rest';

const LongTextField = TextField;

const {
  DependentField,
  EmbeddedField,
  GrouppedField,
  EmbeddedArrayField,
  EmbeddedRefArrayField,
  EmbeddedRefField,
  ReferenceManyField,
} = ui.components;

const showIfExists = field => root => !!root[field];

const showIfNotEmptyRel = field => root => !!root[field] || (Array.isArray(root[field]) && root[field].length > 0);

const ShowView = (props, context) => {
  const { translate, uix } = context;
  const { Title } = uix['system/StudentAttendance'];
  return (
    <Show title={<Title />} {...props} >
      <SimpleShowLayout {...props}>
        <DependentField resolve={showIfExists('present')}>
          <BooleanField label="resources.StudentAttendance.fields.present" source="present" />
        </DependentField>
        <DependentField resolve={showIfExists('specialNotes')}>
          <RichTextField label="resources.StudentAttendance.fields.specialNotes" source="specialNotes" allowEmpty />
        </DependentField>
        <DependentField resolve={showIfExists('superpuper')}>
          <TextField label="resources.StudentAttendance.fields.superpuper" source="superpuper" allowEmpty />
        </DependentField>

        <DependentField resolve={showIfNotEmptyRel('meetingLinkId')} source="meetingLinkId" >
          <ReferenceField label="resources.StudentAttendance.fields.meetingLink" source="meetingLinkId" reference="system/Meeting" allowEmpty linkType="show" >
            <TextField source="date" allowEmpty />
          </ReferenceField>
        </DependentField>

        <DependentField resolve={showIfNotEmptyRel('studentLinkId')} source="studentLinkId" >
          <ReferenceField label="resources.StudentAttendance.fields.studentLink" source="studentLinkId" reference="system/Student" allowEmpty linkType="show" >
            <TextField source="personFullName" allowEmpty />
          </ReferenceField>
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
