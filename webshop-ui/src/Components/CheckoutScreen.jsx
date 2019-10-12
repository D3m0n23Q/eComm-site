import React, { Component } from 'react';
import { NavBar } from './NavBar';
import { CheckoutProductList } from './CheckoutProductList';


export class CheckoutScreen extends Component {
    constructor() {
        super();
        this.state = {shippingCost: 0};
    }
    render() {
        return (
            <div>
                <NavBar navigateHome={this.props.navigateHome}/>
                <h1>Checkout page</h1>
                <CheckoutProductList products={this.props.cart.Products}/>
                <br></br>
                <label>Shipping cost: ${this.state.shippingCost}</label>
                <button onClick={this.calculateShipping.bind(this)}>Calculate</button>
                <br></br>
                <button onClick={this.createOrder.bind(this)}>Purchase</button>
            </div>
        );
    }

    calculateShipping() {
        this.postCartToAPI('api/Orders/GetShipping')
        .then(response => response.json())
        .then(data => this.setState({shippingCost: data}));
    }

    createOrder() {
        this.postCartToAPI('api/Orders/Create')
        .then(() => alert('Order successfully submitted!'))
        .then(() => this.props.createOrder());
    }

    postCartToAPI(uri) {
        var _Data = JSON.stringify(this.props.cart)
        return fetch(uri, 
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: _Data
        })
    }
}