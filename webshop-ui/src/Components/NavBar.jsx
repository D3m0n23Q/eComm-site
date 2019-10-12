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
import { Link } from "react-router-dom";

export class NavBar extends Component {
    render() {
        return (
            <Navbar className="navbar">
                <NavbarBrand>
                    <Link to="/home">Web Shop</Link>
                </NavbarBrand>
                <Link to="/checkout">Checkout</Link>
            </Navbar>
        );
    }
}