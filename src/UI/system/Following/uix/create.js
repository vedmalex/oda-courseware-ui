import React from "react";
import {
  Create,
} from "admin-on-rest";
import FollowingForm from "./form";
import FollowingTitle from "./title";
import { ui } from 'oda-aor-rest';
const actionType = ui.consts.actionType;

export default props => (
  <Create title={<FollowingTitle />} {...props} >
    <FollowingForm
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
  </Create >
);
