import React from "react";
export default ({ record }) => {
  return <span>Teacher {record ? `"${record.id}"` : ""}</span>;
};
