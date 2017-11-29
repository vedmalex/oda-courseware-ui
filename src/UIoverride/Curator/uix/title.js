import React from "react";
export default ({ record }) => {
  return <span>Curator {record ? `"${record.fullName}"` : ""}</span>;
};
