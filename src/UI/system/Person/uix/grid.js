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
    <TextField sortable={true} source="spiritualName" />
    <TextField sortable={true} source="fullName" />

    <ShowButton />
    <EditButton />
    <DeleteButton />
  </Datagrid>
);
