import React, { Component } from 'react'
import { Container, Col, Row } from 'reactstrap'

export class PurchasableProductList extends Component {
    constructor(props) {
        super(props);
        this.addItemToCart = this.addItemToCart.bind(this);
    }
    render() {
        return (
            <Container className="productList">
                <Row className="productListHeader">
                    <Col>Product name</Col>
                    <Col>Price ($)</Col>
                    <Col>Quantity</Col>
                    <Col></Col>
                </Row>
                {this.props.products.map(product => 
                    <Row key={product.id}>
                        <Col>{product.name}</Col>
                        <Col>${product.value.toFixed(2)} </Col>
                        <Col>
                            <input type='number' id={'productQuantitySelector_' + product.id} min='0' placeholder='0'/>
                        </Col>
                        <Col><button onClick={() => this.addItemToCart(product)}>Add to cart</button></Col>
                    </Row>
                )}
            </Container>
        );
    }

    addItemToCart(product) {
        var elemId = 'productQuantitySelector_' + product.id;
        var quantity = document.getElementById(elemId).value;

        if(quantity > 0) this.props.addToCart(product, quantity);
    }
}