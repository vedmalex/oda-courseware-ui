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
  BooleanInput,
} from "admin-on-rest";

export default props => (
  <Datagrid {...props} >
    <TextField sortable={false} source="fullName" allowEmpty />
    <TextField sortable={true} source="uin" />
    <NumberField sortable={false} source="ages" allowEmpty />

    <ShowButton />
    <EditButton />
    <DeleteButton />
  </Datagrid>
);
