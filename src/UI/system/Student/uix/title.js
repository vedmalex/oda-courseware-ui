import React from "react";
export default ({ record }) => (
  <span>
    Student {record ? `"${record.id}"` : ""}
  </span>
);
