import React from "react";
export default ({ record }) => {
  return <span>Phone {record ? `"${record.phoneNumber}"` : ""}</span>;
};
