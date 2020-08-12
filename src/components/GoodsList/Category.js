import React from 'react';
import PropTypes from 'prop-types';
import SingleGood from './SingleGood';
import './Category.scss';

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { data, category, onAddToCart } = this.props;
    const goods = data.map((good, index) => (
      <SingleGood
        onAddToCart={onAddToCart}
        category={category}
        key={index}
        {...good}
      />
    ));
    return (
      <section className="category">
        <h2>{category}</h2>
        <ul>{goods}</ul>
      </section>
    );
  }
}

Category.propTypes = {
  data: PropTypes.array,
  category: PropTypes.string,
  onAddToCart: PropTypes.func,
};

export default Category;
