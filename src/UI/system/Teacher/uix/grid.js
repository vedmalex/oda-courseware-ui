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
    <TextField source="firstName" />
    <TextField source="middleName" />
    <TextField source="lastName" />

    <ShowButton />
    <EditButton />
    <DeleteButton />
  </Datagrid>
);
