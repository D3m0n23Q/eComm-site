import React, { Component } from 'react';
import { NavBar } from './NavBar';
import { CheckoutProductList } from './CheckoutProductList';


export class CheckoutScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {shippingCost: 0, products: props.cart.Products};
    }
    render() {
        return (
            <div>
                <NavBar navigateHome={this.props.navigateHome}/>
                <h1>Checkout page</h1>
                <div>
                    <CheckoutProductList products={this.state.products}/>
                </div>
                <p>
                    Order Total: ${this.props.cart.CartValue.toFixed(2)}
                </p>
                <p>
                <label>Shipping cost: ${this.state.shippingCost.toFixed(2)}</label>
                <button onClick={this.calculateShipping.bind(this)}>Calculate</button>
                </p>
                <p>
                    <label>Total items in cart: {this.state.products.reduce((acc ,product) => acc + product.count, 0)}</label>
                </p>
                <div hidden={this.props.cart.CartValue <= 0}>
                    <button onClick={this.clearCart.bind(this)}>Clear cart</button>
                    <button onClick={this.createOrder.bind(this)} >Place order</button>
                </div>
            </div>
        );
    }

    calculateShipping() {
        this.postCartToAPI('api/Orders/GetShipping')
        .then(response => response.json())
        .then(data => this.setState({shippingCost: data}));
    }

    clearCart() {
        this.props.clearCart();
        this.setState({shippingCost:0, products:[]});
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