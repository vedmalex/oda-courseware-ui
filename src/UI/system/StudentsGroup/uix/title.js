import React from "react";
export default ({ record }) => {
  return <span>StudentsGroup {record ? `"${record.name}"` : ""}</span>;
};
