import React from "react";
import {
  Edit,
} from "admin-on-rest";
import EmailTypeForm from "./form";
import EmailTypeTitle from "./title";
import { ui } from 'oda-aor-rest';
const actionType = ui.consts.actionType;

export default props => (
  <Edit title={<EmailTypeTitle />} {...props}>
    <EmailTypeForm
      {...props}
      singleRelActions={[
        { id: actionType.CREATE, name: 'Create' },
        { id: actionType.UPDATE, name: 'Update Existing' },
        { id: actionType.CLONE, name: 'Copy Selected' },
        { id: actionType.USE, name: 'Use Existing' },
        { id: actionType.UNLINK, name: 'Unlink' },
      ]}
      manyRelActions={[
        { id: actionType.CREATE, name: 'Create' },
        { id: actionType.UPDATE, name: 'Update Existing' },
        { id: actionType.CLONE, name: 'Copy Selected' },
        { id: actionType.USE, name: 'Use Existing' },
      ]}
    />
  </Edit >
);