import React, { Component } from 'react';
import { Container, Col } from 'reactstrap'
import { toast } from 'react-toastify'

import { PurchasableProductList } from './PurchasableProductsList';

export class ProductsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {products: []};
        this.addToCart = this.addToCart.bind(this);
        this.getProducts();
    }

    render() {
        return (
            <Container>
                <Col>
                    <h2>Products</h2>
                </Col>
                <PurchasableProductList products={this.state.products} addToCart={this.addToCart}/>
            </Container>
        );
    }

    addToCart(product, quantity) {
        var _Product = this.props.cart.Products.find((elem) => elem.id === product.id)
    
        if(!_Product) { 
            _Product = product;
            _Product.count = quantity;
            this.props.cart.Products.push(_Product);
        }
        else {
            _Product.count = parseInt(_Product.count) + parseInt(quantity);
        }
    
        this.props.cart.CartValue += _Product.value * quantity;

        toast('Added ' + quantity + 'x ' + _Product.name + ' to the cart', {autoClose: 2000, position: "bottom-left"});
    }

    getProducts() {
        fetch('/api/Products')
            .then(response => response.json())
            .then(data => this.setState({products: data})
            )
    }
}

