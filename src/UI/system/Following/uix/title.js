import React from "react";
export default ({ record }) => {
  return <span>Following {record ? `"${record.id}"` : ""}</span>;
};
