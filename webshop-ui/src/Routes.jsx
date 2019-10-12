import React, { Component }  from "react"
import { Route, Switch } from "react-router-dom";

import { ProductsScreen } from "./Components/ProductsScreen";
import { CheckoutScreen } from "./Components/CheckoutScreen";


export class Routes extends Component {
    render() {
        return (
            <Switch>
              <Route path="/home">
                <ProductsScreen cart={this.props.cart}/>
              </Route>
              <Route path="/checkout">
                <CheckoutScreen cart={this.props.cart}/>
              </Route>
            </Switch>
          );
    }
}