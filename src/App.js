import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import GoodsList from './components/GoodsList/GoodsList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      goodsList: {},
    };
  }
  render() {
    return (
      <main className="app">
        <Header count={this.state.count} />
        <GoodsList
          goodsList={this.state.goodsList}
          onAddToCart={this.handleAddToCart.bind(this)}
        />
      </main>
    );
  }

  componentDidMount() {
    this.getProductsData();
  }

  getProductsData() {
    fetch('http://localhost:3000/products')
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('fetch products failed');
        }
      })
      .then((json) => {
        this.setState({
          count: 0,
          goodsList: this.dataTransFormer(json),
        });
      })
      .catch((e) => {
        console.error(e);
      });
  }

  dataTransFormer(data) {
    const result = {};
    data.forEach((itm) => {
      if (!result[itm.category]) {
        result[itm.category] = [];
      }
      const newItm = Object.assign({}, itm);
      Reflect.deleteProperty(newItm, 'category');
      result[itm.category].push(newItm);
    });
    return result;
  }

  handleAddToCart() {
    this.setState(
      Object.assign({}, this.state, {
        count: this.state.count + 1,
      })
    );
  }
}

export default App;
