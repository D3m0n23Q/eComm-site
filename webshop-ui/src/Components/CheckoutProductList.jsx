import React, { Component } from 'react'
import { Product } from './Product'

export class CheckoutProductList extends Component {
    render() {
        return (
            <div>
                <div>Product name Price($) Quantity</div>
                {this.props.products.length > 0 ? this.props.products.map(product => 
                    <div key={product.id}>
                        <Product product={product}/> {product.count}
                    </div>
                ) : 'No items in cart'}
            </div>
        );
    }
}