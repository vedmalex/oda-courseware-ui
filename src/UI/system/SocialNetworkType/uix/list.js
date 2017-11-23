import React from "react";
import {
  List,
} from "admin-on-rest";

import Grid from "./grid";
import Filter from "./filter";

export default props => (
  <List {...props} filters={<Filter />}>
    <Grid {...props} />
  </List>
);
