import React, { Component } from 'react';
import { Col } from 'reactstrap'

export class NotFound extends Component {
    render() {
        return(
            <Col>
                <h1>Not found!</h1>
                <p>The page you are looking for could not be found</p>
            </Col>
        );
    }
}