import React from "react";
import PropTypes from 'prop-types';
import {
  Create,
} from "admin-on-rest";
import { ui } from 'oda-aor-rest';
const actionType = ui.consts.actionType;

const CreateForm = (props, context) =>{
  const Form = context.uix.Curator.Form;
  const Title = context.uix.Curator.Title;

  return (
  <Create title={<Title />} {...props} >
    <Form
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
)};

CreateForm.contextTypes = {
  uix: PropTypes.object.isRequired,
}

export default CreateForm;
