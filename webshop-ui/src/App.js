import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {CheckoutScreen} from './Components/CheckoutScreen'
import {ProductsScreen} from './Components/ProductsScreen'
import { ThankYouScreen } from './Components/ThankYouScreen';

export default class App extends Component {
  constructor() {
    super();
    this.ShoppingCart = {CartValue: 0, Products: []}
  }

  render () {
    return <ProductsScreen addProductToCart={this.addProductToCart.bind(this)} checkout={this.checkout.bind(this)}/>
  }

  addProductToCart(product) {
    var _Product = this.ShoppingCart.Products.find((elem) => elem.id == product.id)

    if(!_Product) { 
      _Product = product;
      _Product.count = 1;
      this.ShoppingCart.Products.push(_Product);
    }
    else {
      _Product.count += 1;
    }

    this.ShoppingCart.CartValue += _Product.value;
  }
  
  checkout() {
    ReactDOM.render(<CheckoutScreen cart={this.ShoppingCart} createOrder={this.createOrder.bind(this)} navigateHome={this.navigateHome.bind(this)}/>, document.getElementById('root'));
  }

  createOrder() {
    ReactDOM.render(<ThankYouScreen navigateHome={this.navigateHome.bind(this)}/>, document.getElementById('root'));
    this.products = [];
  }
  
  navigateHome() {
      ReactDOM.render(<ProductsScreen addProductToCart={this.addProductToCart.bind(this)} checkout={this.checkout.bind(this)}/>, document.getElementById('root'));
  }
}




