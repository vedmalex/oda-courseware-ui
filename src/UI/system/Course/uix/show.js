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
  const { Title } = uix['system/Course'];
  const Subject = uix['system/Subject'];
  const Group = uix['system/Group'];

  return (
    <Show title={<Title />} {...props} >
      <SimpleShowLayout {...props}>
        <DependentField resolve={showIfExists('name')}>
          <TextField label="resources.Course.fields.name" source="name" />
        </DependentField>

        <ReferenceManyField label="resources.Course.fields.subjects" reference="system/Subject" target="course" idKey="id" allowEmpty >
          <Subject.Grid />
        </ReferenceManyField>

        <ReferenceManyField label="resources.Course.fields.groups" reference="system/Group" target="course" idKey="id" allowEmpty >
          <Group.Grid />
        </ReferenceManyField>

      </SimpleShowLayout>
    </Show>
  );
};

ShowView.contextTypes = {
  uix: PropTypes.object.isRequired,
  translate: PropTypes.func.isRequired,
}

export default ShowView;
