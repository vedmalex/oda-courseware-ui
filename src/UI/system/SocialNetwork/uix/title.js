import React from "react";
export default ({ record }) => {
  return <span>SocialNetwork {record ? `"${record.account}"` : ""}</span>;
};
