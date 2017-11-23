import React from "react";
export default ({ record }) => {
  return <span>Email {record ? `"${record.email}"` : ""}</span>;
};
