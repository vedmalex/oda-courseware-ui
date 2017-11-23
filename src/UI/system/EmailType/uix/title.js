import React from "react";
export default ({ record }) => {
  return <span>EmailType {record ? `"${record.name}"` : ""}</span>;
};
