import React from 'react';
import PropTypes from 'prop-types';
import Category from './Category';

class GoodsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { goodsList, onAddToCart } = this.props;
    return Object.keys(goodsList).map((key, index) => {
      return (
        <Category onAddToCart={onAddToCart} data={goodsList[key]} key={index} />
      );
    });
  }
}

GoodsList.propTypes = {
  goodsList: PropTypes.object,
  onAddToCart: PropTypes.func,
};

export default GoodsList;
