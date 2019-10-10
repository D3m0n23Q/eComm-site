import React, { Component } from 'react'
import { PurchasableProduct } from './PurchasableProduct'

export class PurchasableProductList extends Component {
    render() {
        return this.props.products.map(product => 
            <PurchasableProduct key={product.id} product={product} addProductToCart={this.props.addProductToCart}/>
        );
    }
}