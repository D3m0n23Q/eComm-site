import React, { Component }  from "react"
import { Redirect, Route, Switch } from "react-router-dom";

import { CheckoutScreen } from "./Components/CheckoutScreen";
import { Home } from "./Components/Home";
import { NotFound } from "./Components/NotFound"
import { ProductsScreen } from "./Components/ProductsScreen";
import { ThankYouScreen } from "./Components/ThankYouScreen";


export class Routes extends Component {
    render() {
        return (
            <Switch>
              <Redirect exact from='/' to='/home'/>
              <Route path="/home" component={Home} />
              <Route path="/products">
                <ProductsScreen cart={this.props.cart}/>
              </Route>
              <Route path="/checkout">
                <CheckoutScreen cart={this.props.cart} getCookie={this.props.getCookie}/>
              </Route>
              <Route path="/orderSubmitted" component={ThankYouScreen} />
              <Route component={NotFound}/>
            </Switch>
          );
    }
}