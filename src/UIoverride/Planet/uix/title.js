import React from "react";
export default ({ record }) => {
  return <span>Planets {record ? `"${record.name}"` : ""}</span>;
};
