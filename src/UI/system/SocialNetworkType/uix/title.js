import React from "react";
export default ({ record }) => {
  return <span>SocialNetworkType {record ? `"${record.name}"` : ""}</span>;
};
