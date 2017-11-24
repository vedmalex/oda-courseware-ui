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
    <TextField sortable={false} source="spiritualName" />
    <TextField sortable={false} source="fullName" />

    <ShowButton />
    <EditButton />
    <DeleteButton />
  </Datagrid>
);
