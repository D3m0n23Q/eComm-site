import React, { Component } from 'react';
import { 
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

export class NavBar extends Component {
    render() {
        return (
            <Navbar className="navbar">
{/*                 <NavbarBrand to="/home">
                    <NavLink>Web Shop</NavLink>
                </NavbarBrand>
                <NavLink to="/checkout">Checkout</NavLink> */}
                <button onClick={this.props.navigateHome}>WebShop</button>
                <button onClick={this.props.checkout}>Checkout</button>
            </Navbar>
        );
    }
}