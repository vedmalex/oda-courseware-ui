import React from "react";
export default ({ record }) => (
  <span>
    EmailType {record ? `"${record.name}"` : ""}
  </span>
);
