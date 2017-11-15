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
    <NullableBooleanInput label="Followers exists" source="followers-exists" />

    <TextInput label="Followers" source="followers-imatch" allowEmpty />
    <SelectArrayInput label="Followers in" source="followers-in" allowEmpty />
    <SelectArrayInput label="Followers not in" source="followers-nin" allowEmpty />
    <NullableBooleanInput label="Followings exists" source="followings-exists" />

    <TextInput label="Followings" source="followings-imatch" allowEmpty />
    <SelectArrayInput label="Followings in" source="followings-in" allowEmpty />
    <SelectArrayInput label="Followings not in" source="followings-nin" allowEmpty />
  </Filter>
);
