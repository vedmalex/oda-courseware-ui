import React from "react";
export default ({ record }) => (
  <span>
    Group {record ? `"${record.name}"` : ""}
  </span>
);
