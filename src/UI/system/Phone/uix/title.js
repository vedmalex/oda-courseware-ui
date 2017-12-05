import React from "react";
import PropTypes from 'prop-types';

const Title = ({ record },{translate}) => (
  <span>
    {translate('resources.Phone.name', {smart_count : 1})} {record ? `"${record.phoneNumber}"` : `${record.id}`}
  </span>
);

Title.contextTypes = {
  translate: PropTypes.func.isRequired,
}

export default Title;
