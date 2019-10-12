import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { Link } from "react-router-dom";

export class NavBar extends Component {
    render() {
        return (
            <Navbar fixed="top">
                <NavbarBrand>
                    <Link to="/home" style={{color: '#ccc'}}>eComm Inc.</Link>
                </NavbarBrand>
                <Link to="/checkout" style={{color: '#ccc'}}>Shopping Cart</Link>
            </Navbar>
        );
    }
}