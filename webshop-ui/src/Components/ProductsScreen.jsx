import React, { Component } from 'react';
import { NavBar } from './NavBar';
import { PurchasableProductList } from './PurchasableProductsList';

export class ProductsScreen extends Component {
    constructor(props) {
        super(props);
        this.checkout = this.props.checkout;
        this.addProductToCart = this.props.addProductToCart;
        this.state = { products: [] };

        fetch('/api/Products')
          .then(response => response.json())
          .then(data => { 
              this.setState({ products: data }); 
            });
    }

    render() {
        return (
            <div>
                <NavBar checkout={this.checkout}/>
                <PurchasableProductList products={this.state.products} addProductToCart={this.addProductToCart}/>
            </div>
        );
    }
}

