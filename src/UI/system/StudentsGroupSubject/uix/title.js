import React from "react";
export default ({ record }) => {
  return <span>StudentsGroupSubject {record ? `"${record.id}"` : ""}</span>;
};
