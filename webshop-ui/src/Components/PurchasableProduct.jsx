import React, { Component } from 'react';
import { Product } from './Product';

export class PurchasableProduct extends Component{    
    constructor(props) {
        super(props);
        this.addProductToCart = this.props.addProductToCart;
    }
    render() {
        const product = this.props.product;
        return (
                <div>
                    <Product product={product}/>
                    <button onClick={this.addToCart.bind(this, product)}>Add to cart</button>
                </div>
        )
    }

    addToCart(product) {
        this.addProductToCart(product);
    }
}