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
    <NullableBooleanInput label="Name exists" source="name-exists" />

    <TextInput label="Name" source="name-imatch" allowEmpty />
    <SelectArrayInput label="Name in" source="name-in" allowEmpty />
    <SelectArrayInput label="Name not in" source="name-nin" allowEmpty />
  </Filter>
);
