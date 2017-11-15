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
    <TextField source="followers" />
    <TextField source="followings" />

    <ShowButton />
    <EditButton />
    <DeleteButton />
  </Datagrid>
);
