import React, { Component } from 'react'
import { Container, Col, Row } from 'reactstrap'

export class CheckoutProductList extends Component {
    constructor(props) {
        super(props);
        this.removeItemFromCart = this.removeItemFromCart.bind(this);
    }
    render() {
        return (
            <Container className="productList">
                { this.props.products.length > 0 ? 
                <Row className="productListHeader">
                    <Col>Product name</Col>
                    <Col> Unit Price </Col>
                    <Col> Quantity </Col>
                    <Col> Total cost </Col>
                    <Col></Col>
                    <Col></Col>
                </Row> : null
                }
                {   
                    this.props.products.length > 0 ? 
                    this.props.products.map(product => 
                        <Row key={product.id}>
                            <Col> {product.name} </Col>
                            <Col> ${product.value} </Col> 
                            <Col> {product.count} </Col>
                            <Col>
                                ${(product.value * product.count).toFixed(2)}
                            </Col>
                            <Col>
                                <input type='number' id={'productQuantitySelector_' + product.id} min='0' max={product.count} placeholder='All'/>
                            </Col>
                            <Col>
                                <button onClick={() => this.removeItemFromCart(product)}>Remove from cart</button>
                            </Col>
                        </Row>
                    ) :
                    <Col sm={3}>
                        <label>No items in cart</label>
                    </Col>
                }
            </Container>
        );
    }

    removeItemFromCart(product) {
        var elemId = "productQuantitySelector_" + product.id;
        var quantity = document.getElementById(elemId).value;

        if(quantity <= 0) quantity = product.count

        this.props.removeItemFromCart(product, quantity);
    }
}