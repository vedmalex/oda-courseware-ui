import React from "react";
export default ({ record }) => (
  <span>
    SocialNetwork {record ? `"${record.account}"` : ""}
  </span>
);
