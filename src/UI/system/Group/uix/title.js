import React from "react";
import PropTypes from 'prop-types';

const Title = ({ record },{translate}) => (
  <span>
    {translate('resources.Group.name', {smart_count : 1})} {record ? `"${record.name}"` : `${record.id}`}
  </span>
);

Title.contextTypes = {
  translate: PropTypes.func.isRequired,
}

export default Title;
