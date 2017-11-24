import React from "react";
import {
  List,
} from "admin-on-rest";

import Grid from "./grid";

export default props => (
  <List {...props}>
    <Grid {...props} />
  </List>
);
