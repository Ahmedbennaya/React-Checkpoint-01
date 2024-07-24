import React from 'react';
import PropTypes from 'prop-types';
import product from '../product';
const Name = ({ name }) => {
  return <span>{product.name}</span>;
};

Name.propTypes = {
  name: PropTypes.string
};

export default Name;