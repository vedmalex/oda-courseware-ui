import React from "react";
export default ({ record }) => {
  return <span>PhoneType {record ? `"${record.name}"` : ""}</span>;
};
