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
    <NullableBooleanInput label="Uin exists" source="uin-exists" />

    <TextInput label="Uin" source="uin-imatch" allowEmpty />
    <SelectArrayInput label="Uin in" source="uin-in" allowEmpty />
    <SelectArrayInput label="Uin not in" source="uin-nin" allowEmpty />
  </Filter>
);
