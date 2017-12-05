import React from "react";
import PropTypes from 'prop-types';

const Title = ({ record }, { translate }) => (
  <span>
    {record ? `${record.fullName}` : `${record.id}`}
  </span>
);

Title.contextTypes = {
  translate: PropTypes.func.isRequired,
}

export default Title;
