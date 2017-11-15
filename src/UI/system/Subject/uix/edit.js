import React from "react";
import {
  Edit,
} from "admin-on-rest";
import SubjectForm from "./form";
import SubjectTitle from "./title";
import { ui } from 'oda-aor-rest';
const actionType = ui.consts.actionType;

export default props => (
  <Edit title={<SubjectTitle />} {...props}>
    <SubjectForm
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
