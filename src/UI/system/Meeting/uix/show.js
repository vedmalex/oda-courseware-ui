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
  const { Title } = uix['system/Meeting'];

  return (
    <Show title={<Title />} {...props} >
      <SimpleShowLayout {...props}>
        <DependentField resolve={showIfExists('date')}>
          <DateField label="resources.Meeting.fields.date" source="date" allowEmpty />
        </DependentField>

        <DependentField resolve={showIfNotEmptyRel('curatorId')} source="curatorId" >
          <ReferenceField label="resources.Meeting.fields.curator" source="curatorId" reference="system/Curator" allowEmpty linkType="show" >
            <TextField source="fullName" allowEmpty />
          </ReferenceField>
        </DependentField>

        <DependentField resolve={showIfNotEmptyRel('groupId')} source="groupId" >
          <ReferenceField label="resources.Meeting.fields.group" source="groupId" reference="system/Group" allowEmpty linkType="show" >
            <TextField source="name" allowEmpty />
          </ReferenceField>
        </DependentField>

        <DependentField resolve={showIfNotEmptyRel('studentsValues')} source="studentsValues">
          <EmbeddedArrayField reference="system/Student" target="meetings" label="resources.Meeting.fields.students" source="studentsValues" allowEmpty >
            <ReferenceField label={translate("resources.Student.name", { smart_count: 1})} source="id" reference="system/Student" allowEmpty linkType="show" >
              <TextField source="personFullName" />
            </ReferenceField>
            <DependentField resolve={showIfExists('present')} source="present" scoped >
              <BooleanField label="resources.StudentAttendance.fields.present" source="present" />
            </DependentField>
            <DependentField resolve={showIfExists('specialNotes')} source="specialNotes" scoped >
              <RichTextField label="resources.StudentAttendance.fields.specialNotes" source="specialNotes" allowEmpty />
            </DependentField>
            <DependentField resolve={showIfExists('superpuper')} source="superpuper" scoped >
              <TextField label="resources.StudentAttendance.fields.superpuper" source="superpuper" allowEmpty />
            </DependentField>
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
