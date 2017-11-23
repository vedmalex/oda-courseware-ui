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
    <NullableBooleanInput label="Account exists" source="account-exists" />

    <TextInput label="Account" source="account-imatch" allowEmpty />
    <SelectArrayInput label="Account in" source="account-in" allowEmpty />
    <SelectArrayInput label="Account not in" source="account-nin" allowEmpty />
  </Filter>
);
