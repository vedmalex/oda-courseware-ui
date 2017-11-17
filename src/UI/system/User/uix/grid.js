import React from "react";
import {
  Datagrid,
  TextField,
  DateField,
  NumberField,
  BooleanField,
  EditButton,
  DeleteButton,
  ShowButton,
  ReferenceField,
} from "admin-on-rest";

export default props => (
  <Datagrid {...props} >
    <TextField sortable={true} source="userName" />
    <BooleanField sortable={true} source="isAdmin" allowEmpty />
    <BooleanField sortable={true} source="isSystem" allowEmpty />
    <BooleanField sortable={true} source="enabled" allowEmpty />

    <ShowButton />
    <EditButton />
    <DeleteButton />
  </Datagrid>
);
