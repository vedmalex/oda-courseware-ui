import React from "react";
import PropTypes from 'prop-types';
import {
  Edit,
} from "admin-on-rest";
import { ui } from 'oda-aor-rest';
const actionType = ui.consts.actionType;

const EditForm = (props, context) => {
  const Form = context.uix.Person.Form;
  const Title = context.uix.Person.Title;
  const { translate } = context;
  return (
    <Edit title={<Title />} {...props}>
      <Form
        {...props}
        singleRelActions={[
          { id: actionType.CREATE, name: translate('singleRelActions.CREATE') },
          { id: actionType.UPDATE, name: translate('singleRelActions.UPDATE') },
          { id: actionType.CLONE, name: translate('singleRelActions.CLONE') },
          { id: actionType.USE, name: translate('singleRelActions.USE') },
          { id: actionType.UNLINK, name: translate('singleRelActions.UNLINK') },
        ]}
        manyRelActions={[
          { id: actionType.CREATE, name: 'Create' },
          { id: actionType.UPDATE, name: 'Update Existing' },
          { id: actionType.CLONE, name: 'Copy Selected' },
          { id: actionType.USE, name: 'Use Existing' },
        ]}
      />
    </Edit >
  )
};

EditForm.contextTypes = {
  uix: PropTypes.object.isRequired,
  translate: PropTypes.func.isRequired,
}

export default EditForm;
