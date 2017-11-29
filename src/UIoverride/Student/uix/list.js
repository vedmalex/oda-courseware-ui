import React, { Component } from "react";
import {
  List,
} from "admin-on-rest";
import Grid from './grid';

export default class extends Component {
  render() {
    const { props } = this;
    return (
      <List {...props} >
        <Grid {...props} />
      </List>
    );
  }
}
