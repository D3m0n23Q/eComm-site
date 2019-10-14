import React, { Component } from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from 'reactstrap';
import { Link } from "react-router-dom";

export class NavBar extends Component {
    constructor() {
        super();
        this.state = {isOpen: false};
        this.toggle = () => this.setState(prevState => ({isOpen: !prevState.isOpen}));
    }


    render() {
        return (
            <Navbar color="light" fixed="top" light>
                <NavbarBrand>
                    <Link to="/home" style={{color: 'black'}}>eComm Inc.</Link>
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle} className="ml-auto mr-3"/>
                <Link  to="/checkout" style={{ color: 'black' }}>Shopping Cart</Link>
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav>
                        <NavItem className="ml-auto mr-auto">
                            <Link to="/products" onClick={this.toggle} style={{ color: 'black' }}>Products</Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}