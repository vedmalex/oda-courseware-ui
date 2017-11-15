import React from "react";
import {
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  SimpleForm,
  TextInput,
  DateInput,
  NumberInput,
  BooleanInput,
  RichTextInput,
  NullableBooleanInput,
  Filter,
} from "admin-on-rest";

export default props => (
  <Filter {...props} >
    <TextInput label="Search" source="q" allowEmpty alwaysOn />
    <NullableBooleanInput label="UserName exists" source="userName-exists" />

    <TextInput label="UserName" source="userName-imatch" allowEmpty />
    <SelectArrayInput label="UserName in" source="userName-in" allowEmpty />
    <SelectArrayInput label="UserName not in" source="userName-nin" allowEmpty />
  </Filter>
);
