import React from "react";
export default ({ record }) => {
  return <span>Person {record ? `"${record.name}"` : ""}</span>;
};
