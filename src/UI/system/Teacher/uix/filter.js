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
    <NullableBooleanInput label="FirstName exists" source="firstName-exists" />

    <TextInput label="FirstName" source="firstName-imatch" allowEmpty />
    <SelectArrayInput label="FirstName in" source="firstName-in" allowEmpty />
    <SelectArrayInput label="FirstName not in" source="firstName-nin" allowEmpty />
    <NullableBooleanInput label="MiddleName exists" source="middleName-exists" />

    <TextInput label="MiddleName" source="middleName-imatch" allowEmpty />
    <SelectArrayInput label="MiddleName in" source="middleName-in" allowEmpty />
    <SelectArrayInput label="MiddleName not in" source="middleName-nin" allowEmpty />
    <NullableBooleanInput label="LastName exists" source="lastName-exists" />

    <TextInput label="LastName" source="lastName-imatch" allowEmpty />
    <SelectArrayInput label="LastName in" source="lastName-in" allowEmpty />
    <SelectArrayInput label="LastName not in" source="lastName-nin" allowEmpty />
  </Filter>
);
