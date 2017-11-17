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
    <NullableBooleanInput label="Subject exists" source="subject-exists" />

    <TextInput label="Subject" source="subject-imatch" allowEmpty />
    <SelectArrayInput label="Subject in" source="subject-in" allowEmpty />
    <SelectArrayInput label="Subject not in" source="subject-nin" allowEmpty />
    <NullableBooleanInput label="Students group exists" source="studentsGroup-exists" />

    <TextInput label="Students group" source="studentsGroup-imatch" allowEmpty />
    <SelectArrayInput label="Students group in" source="studentsGroup-in" allowEmpty />
    <SelectArrayInput label="Students group not in" source="studentsGroup-nin" allowEmpty />
  </Filter>
);
