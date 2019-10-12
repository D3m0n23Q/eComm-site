import React, { Component } from 'react'
import { Product } from './Product'

export class CheckoutProductList extends Component {
    render() {
        return this.props.products.map(product => 
            <div key={product.id}>
                <Product product={product}/> {product.count}
            </div>
        );
    }
}