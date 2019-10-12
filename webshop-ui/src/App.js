import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {CheckoutScreen} from './Components/CheckoutScreen'
import {ProductsScreen} from './Components/ProductsScreen'
import { ThankYouScreen } from './Components/ThankYouScreen';
import { NavBar } from './Components/NavBar';

export default class App extends Component {
  constructor() {
    super();
    this.ShoppingCart = {CartValue: 0, Products: []}
    this.checkout=this.checkout.bind(this);
    this.navigateHome = this.navigateHome.bind(this);
  }

  render () {
    return (
    <div>
      <NavBar checkout={this.checkout} navigateHome={this.navigateHome}/>
      <div id="div-content">
        <ProductsScreen addProductToCart={this.addProductToCart.bind(this)} checkout={this.checkout.bind(this)}/>
      </div>
    </div>);
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
    ReactDOM.render(<CheckoutScreen cart={this.ShoppingCart} createOrder={this.createOrder.bind(this)}/>, document.getElementById('div-content'));
  }

  createOrder() {
    ReactDOM.render(<ThankYouScreen/>, document.getElementById('div-content'));
  }
  
  navigateHome() {
      ReactDOM.render(<ProductsScreen addProductToCart={this.addProductToCart.bind(this)}/>, document.getElementById('div-content'));
  }
}




