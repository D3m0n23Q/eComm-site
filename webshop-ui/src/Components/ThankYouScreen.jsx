import React, { Component } from 'react'
import { Container, Col, Row } from 'reactstrap'

export class ThankYouScreen extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h1>Thank you!</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <text>Your order has been submitted and will be shipped shortly.</text>
                    </Col>
                </Row>
            </Container>
        );
    }
}