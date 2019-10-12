import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {CheckoutScreen} from './Components/CheckoutScreen'
import {ProductsScreen} from './Components/ProductsScreen'
import { ThankYouScreen } from './Components/ThankYouScreen';
import { NavBar } from './Components/NavBar';
import { Routes } from './Routes';

export default class App extends Component {
  constructor() {
    super();
    this.ShoppingCart = {CartValue: 0, Products: []}
  }

  render () {
    return (
    <div>
      <NavBar checkout={this.checkout} navigateHome={this.navigateHome}/>
      <Routes cart={this.ShoppingCart}/>
      <ToastContainer />
    </div>);
  }
}




