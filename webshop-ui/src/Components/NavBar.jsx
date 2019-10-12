import React, { Component } from 'react';
import { Navbar } from 'reactstrap';

export class NavBar extends Component {
    render() {
        return (
            <Navbar className="navbar">
                <button onClick={this.props.navigateHome}>WebShop</button>
                <button onClick={this.props.checkout}>Checkout</button>
            </Navbar>
        );
    }
}