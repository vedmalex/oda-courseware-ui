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
    <NullableBooleanInput label="First name exists" source="firstName-exists" />

    <TextInput label="First name" source="firstName-imatch" allowEmpty />
    <SelectArrayInput label="First name in" source="firstName-in" allowEmpty />
    <SelectArrayInput label="First name not in" source="firstName-nin" allowEmpty />
    <NullableBooleanInput label="Middle name exists" source="middleName-exists" />

    <TextInput label="Middle name" source="middleName-imatch" allowEmpty />
    <SelectArrayInput label="Middle name in" source="middleName-in" allowEmpty />
    <SelectArrayInput label="Middle name not in" source="middleName-nin" allowEmpty />
    <NullableBooleanInput label="Last name exists" source="lastName-exists" />

    <TextInput label="Last name" source="lastName-imatch" allowEmpty />
    <SelectArrayInput label="Last name in" source="lastName-in" allowEmpty />
    <SelectArrayInput label="Last name not in" source="lastName-nin" allowEmpty />
  </Filter>
);
