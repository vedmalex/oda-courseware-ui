import React from "react";
export default ({ record }) => (
  <span>
    SocialNetworkType {record ? `"${record.name}"` : ""}
  </span>
);
