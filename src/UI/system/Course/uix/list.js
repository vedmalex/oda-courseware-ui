import React from "react";
import PropTypes from 'prop-types';
import {
  List,
} from "admin-on-rest";

const ListView = (props, context) => {
  const { Grid, Filter} = context.uix['system/Course'];

  return (
    <List {...props} filters={<Filter />} title={context.translate("resources.Course.name", { smart_count:2 })}>
      <Grid {...props} />
    </List>
  )
};

ListView.contextTypes = {
  uix: PropTypes.object.isRequired,
  translate: PropTypes.func.isRequired,
}

export default ListView;
