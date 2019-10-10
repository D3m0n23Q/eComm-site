import React, { Component } from 'react'
import { NavBar } from './NavBar'

export class ThankYouScreen extends Component {
    render() {
        return (
            <div>
                <NavBar checkout={this.props.checkout} navigateHome={this.props.navigateHome}/>
                <h1>Thank you!</h1>
            </div>
        );
    }
}