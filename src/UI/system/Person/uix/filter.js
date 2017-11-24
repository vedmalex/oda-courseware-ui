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
    <NullableBooleanInput label="Spiritual name exists" source="spiritualName-exists" />

    <TextInput label="Spiritual name" source="spiritualName-imatch" allowEmpty />
    <SelectArrayInput label="Spiritual name in" source="spiritualName-in" allowEmpty />
    <SelectArrayInput label="Spiritual name not in" source="spiritualName-nin" allowEmpty />
    <NullableBooleanInput label="Full name exists" source="fullName-exists" />

    <TextInput label="Full name" source="fullName-imatch" allowEmpty />
    <SelectArrayInput label="Full name in" source="fullName-in" allowEmpty />
    <SelectArrayInput label="Full name not in" source="fullName-nin" allowEmpty />

  </Filter>
);
