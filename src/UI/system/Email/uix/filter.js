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
    <NullableBooleanInput label="Email exists" source="email-exists" />

    <TextInput label="Email" source="email-imatch" allowEmpty />
    <SelectArrayInput label="Email in" source="email-in" allowEmpty />
    <SelectArrayInput label="Email not in" source="email-nin" allowEmpty />
  </Filter>
);
