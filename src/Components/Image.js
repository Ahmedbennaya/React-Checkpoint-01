import React from 'react';
import PropTypes from 'prop-types';
import product from '../product';

const Image = () => {
  return <img src={product.imageUrl} alt={product.name} />;
};

Image.propTypes = {
  imageUrl: PropTypes.string
};

export default Image;
    