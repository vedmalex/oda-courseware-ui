import React from "react";
export default ({ record }) => {
  return <span>Student {record ? `"${record.uin}"` : ""}</span>;
};
