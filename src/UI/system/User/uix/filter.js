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
    <NullableBooleanInput label="User name exists" source="userName-exists" />

    <TextInput label="User name" source="userName-imatch" allowEmpty />
    <SelectArrayInput label="User name in" source="userName-in" allowEmpty />
    <SelectArrayInput label="User name not in" source="userName-nin" allowEmpty />
    <NullableBooleanInput label="Is admin exists" source="isAdmin-exists" />

    <BooleanInput label="Is admin" source="isAdmin-eq" allowEmpty />
    <NullableBooleanInput label="Is system exists" source="isSystem-exists" />

    <BooleanInput label="Is system" source="isSystem-eq" allowEmpty />
    <NullableBooleanInput label="Enabled exists" source="enabled-exists" />

    <BooleanInput label="Enabled" source="enabled-eq" allowEmpty />

  </Filter>
);
