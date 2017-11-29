import React from "react";
export default ({ record }) => (
  <span>
    Phone {record ? `"${record.phoneNumber}"` : ""}
  </span>
);
