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
  const { Title } = uix['system/Curator'];
  const Group = uix['system/Group'];

  return (
    <Show title={<Title />} {...props} >
      <SimpleShowLayout {...props}>
        <DependentField resolve={showIfExists('spiritualName')}>
          <TextField label="resources.Curator.fields.spiritualName" source="spiritualName" allowEmpty />
        </DependentField>
        <DependentField resolve={showIfExists('fullName')}>
          <TextField label="resources.Curator.fields.fullName" source="fullName" allowEmpty />
        </DependentField>

        <DependentField resolve={showIfNotEmptyRel('personId')} source="personId" >
          <ReferenceField label="resources.Curator.fields.person" source="personId" reference="system/Person" allowEmpty linkType="show" >
            <TextField source="fullName" allowEmpty />
          </ReferenceField>
        </DependentField>

        <ReferenceManyField label="resources.Curator.fields.groups" reference="system/Group" target="curator" idKey="id" allowEmpty >
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
