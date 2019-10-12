import React, { Component } from 'react';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavBar } from './Components/NavBar';
import { Routes } from './Routes';
import { Footer } from './Components/Footer'

export default class App extends Component {
  constructor() {
    super();
    this.ShoppingCart = {CartValue: 0, Products: []}
  }

  render () {
    return (
    <div>
      <NavBar checkout={this.checkout} navigateHome={this.navigateHome}/>
      <Footer/>
      <Routes cart={this.ShoppingCart}/>
      <ToastContainer />
    </div>);
  }
}




