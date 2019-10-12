import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap'
import { toast } from 'react-toastify'

import { CheckoutProductList } from './CheckoutProductList';

export class CheckoutScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {shippingCost: 0};
        this.Cart = props.cart;
        this.clearCart = this.clearCart.bind(this);
        this.createOrder = this.props.createOrder;
        this.removeItemFromCart = this.removeItemFromCart.bind(this);
        
        if(props.cart.Products.length > 0) this.calculateShipping();
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h2>Checkout</h2>
                    </Col>
                </Row>
                <Row>
                    <CheckoutProductList products={this.Cart.Products} removeItemFromCart={this.removeItemFromCart}/>
                </Row>
                <Row>
                    <Col>
                        <label>Total items in cart: {this.Cart.Products.reduce((acc ,product) => acc + parseInt(product.count), 0)}</label>
                    </Col>
                    <Col>
                        <label>Shipping cost: ${this.state.shippingCost.toFixed(2)}</label>
                    </Col>
                    <Col>
                        Order Total: ${(this.Cart.CartValue + this.state.shippingCost).toFixed(2)}
                    </Col>
                </Row>
                <Row>
                </Row>
                <Row></Row>
                <Row>
                    <Col>
                        <button onClick={this.clearCart}>Clear cart</button>
                    </Col>
                    <Col>
                        <button onClick={this.createOrder} disabled={this.Cart.Products.length <= 0}>Place order</button>
                    </Col>
                </Row>
            </Container>
        );
    }

    calculateShipping() {
        this.postCartToAPI('api/Orders/GetShipping')
        .then(response => response.json())
        .then(data => this.setState({shippingCost: data}));
    }

    clearCart() {
        this.Cart.CartValue = 0;
        this.Cart.Products = [];
        this.setState({shippingCost:0});
    }

    createOrder() {
        this.postCartToAPI('api/Orders/Create')
        .then(() => alert('Order successfully submitted!'))
        .then(() => this.props.createOrder());
    }

    postCartToAPI(uri) {
        var data = JSON.stringify(this.Cart)
        return fetch(uri, 
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: data
        })
    }

    removeItemFromCart(product, quantity) {
        var _Product = this.Cart.Products.find((elem) => elem.id == product.id);
          
        this.Cart.CartValue -= _Product.value * Math.min(_Product.count, quantity);

        _Product.count = Math.max(0, _Product.count - quantity);

        if(product.count == 0) 
        {
            var index = this.Cart.Products.indexOf(product);
            this.Cart.Products.splice(index, 1);
        }

        toast('Removed ' + quantity + 'x ' + _Product.name + ' from the cart', {autoClose: 2000, position: "bottom-left"});
        this.calculateShipping();
    }
}