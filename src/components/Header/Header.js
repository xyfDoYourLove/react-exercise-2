import React from 'react';
import PropTypes from 'prop-types';
import cartSvg from '../../assets/cart.svg';
import './Header.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { count } = this.props;
    return (
      <header>
        <h1>Store</h1>
        <span className="cart">
          <img src={cartSvg} className="cart-img" alt="cart" />
          <span className="count">{count}</span>
        </span>
      </header>
    );
  }
}

Header.propTypes = {
  count: PropTypes.number,
};

export default Header;
