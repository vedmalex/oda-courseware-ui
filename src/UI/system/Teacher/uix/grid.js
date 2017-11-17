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
    <TextField sortable={true} source="firstName" />
    <TextField sortable={true} source="middleName" />
    <TextField sortable={true} source="lastName" />

    <ShowButton />
    <EditButton />
    <DeleteButton />
  </Datagrid>
);
