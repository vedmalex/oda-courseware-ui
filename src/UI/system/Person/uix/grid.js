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
    <NumberField sortable={false} source="ages" allowEmpty />

    <ShowButton />
    <EditButton />
    <DeleteButton />
  </Datagrid>
);
