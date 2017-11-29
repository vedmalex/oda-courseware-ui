import React from "react";
export default ({ record }) => (
  <span>
    Email {record ? `"${record.email}"` : ""}
  </span>
);
