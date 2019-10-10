import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { ProductsScreen } from './ProductsScreen';

export class NavBar extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.navigateHome}>Home</button>
                <button onClick={this.props.checkout}>Checkout</button>
            </div>
        );
    }
}