import React, { Component } from 'react';
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";
import { NavBar } from './Components/NavBar';
import { Routes } from './Routes';
import { Footer } from './Components/Footer'

export default class App extends Component {
  constructor() {
    super();
    var cookie = this.getCookie('cart');
    var cart = cookie ? JSON.parse(cookie) : null;
    this.ShoppingCart = cart ? cart : {CartValue: 0, Products: []}
  }

  render () {
    return (
    <div>
      <Router>
        <NavBar checkout={this.checkout} navigateHome={this.navigateHome}/>
        <Footer/>
        <Routes cart={this.ShoppingCart} getCookie={this.getCookie()}/>
        <ToastContainer />
      </Router>
    </div>);
  }

  getCookie(name) {
    var cname = name + '=';
    var cookie = document.cookie;
    var ca = cookie.split(';');

    for(var i = 0; i < ca.length; i++) {
      var c = ca[i].trimLeft();

      if(c.indexOf(cname) === 0) return c.substring(cname.length, c.length)
    }

    return '';
  }
}




