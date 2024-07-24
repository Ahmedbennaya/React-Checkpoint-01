import React from 'react';
import PropTypes from 'prop-types';
import product from '../product';

const Price = () => {
  return <h2>{product.price}</h2>;
};

Price.propTypes = {
  price: PropTypes.string
};

export default Price;
