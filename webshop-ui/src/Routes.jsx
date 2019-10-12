import React, { Component }  from "react"
import { Redirect, Route, Switch } from "react-router-dom";

import { ProductsScreen } from "./Components/ProductsScreen";
import { CheckoutScreen } from "./Components/CheckoutScreen";
import { ThankYouScreen } from "./Components/ThankYouScreen";


export class Routes extends Component {
    render() {
        return (
            <Switch>
              <Route path="/home">
                <ProductsScreen cart={this.props.cart}/>
              </Route>
              <Route path="/checkout">
                <CheckoutScreen cart={this.props.cart} getCookie={this.props.getCookie}/>
              </Route>
              <Route path="/orderSubmitted">
                <ThankYouScreen />
              </Route>

              <Redirect from='/' to='/home'/>
            </Switch>
          );
    }
}