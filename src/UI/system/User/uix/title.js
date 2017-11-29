import React from "react";
export default ({ record }) => (
  <span>
    User {record ? `"${record.userName}"` : ""}
  </span>
);
