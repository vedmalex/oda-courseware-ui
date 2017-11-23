import React from "react";
export default ({ record }) => {
  return <span>{record ? record.fullName : ""}</span>;
};
