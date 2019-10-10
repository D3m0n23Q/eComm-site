import React, { Component } from 'react';

export class Product extends Component{    
    constructor(props) {
        super(props);
    }
    render() {
        const product = this.props.product;
        return (
                <span>{product.name} {product.value} </span>
        )
    }
}