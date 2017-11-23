import React from "react";
export default ({ record }) => {
  return <span>Group {record ? `"${record.name}"` : ""}</span>;
};
