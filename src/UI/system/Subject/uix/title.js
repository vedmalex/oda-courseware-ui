import React from "react";
export default ({ record }) => {
  return <span>Subject {record ? `"${record.name}"` : ""}</span>;
};
