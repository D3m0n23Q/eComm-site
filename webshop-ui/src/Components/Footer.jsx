import React, { Component } from 'react';
import { Navbar } from 'reactstrap';

export class Footer extends Component {
    render() {
        return (
            <Navbar fixed="bottom" color="light">
                &copy; Damian Evans 2019
            </Navbar>
        );
    }
}