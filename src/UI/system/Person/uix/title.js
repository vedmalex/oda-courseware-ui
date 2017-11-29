import React from "react";
export default ({ record }) => (
  <span>
    Person {record ? `"${record.fullName}"` : ""}
  </span>
);
