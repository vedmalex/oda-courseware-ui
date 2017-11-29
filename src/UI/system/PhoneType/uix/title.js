import React from "react";
export default ({ record }) => (
  <span>
    PhoneType {record ? `"${record.name}"` : ""}
  </span>
);
