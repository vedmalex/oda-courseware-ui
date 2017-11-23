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
    <NullableBooleanInput label="Phone number exists" source="phoneNumber-exists" />

    <TextInput label="Phone number" source="phoneNumber-imatch" allowEmpty />
    <SelectArrayInput label="Phone number in" source="phoneNumber-in" allowEmpty />
    <SelectArrayInput label="Phone number not in" source="phoneNumber-nin" allowEmpty />
  </Filter>
);
