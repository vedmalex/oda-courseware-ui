import React from "react";
export default ({ record }) => (
  <span>
    Curator {record ? `"${record.id}"` : ""}
  </span>
);
