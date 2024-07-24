import React from 'react';
import PropTypes from 'prop-types';
import product from '../product';

const Description = () => {
  return <p>{product.description}</p>;
};

Description.propTypes = {
  description: PropTypes.string
};

export default Description;
