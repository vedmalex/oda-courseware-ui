import React from "react";
export default ({ record }) => {
  return <span>StudentProfile {record ? `"${record.id}"` : ""}</span>;
};
