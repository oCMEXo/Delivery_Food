import React, {Component} from "react";
import Header from "../Components/Layout/Header.jsx";
import OrderMainMenu from "../Components/Orders/OrderContent.jsx";
import Footer from "../Components/Layout/Footer.jsx";

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }


    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
    }

    increment() {
        this.setState({
            count: this.state.count + 1,
        })
    }

    decrement() {
        this.setState({
            count: this.state.count - 1,
        })
    }

    reset() {
        this.setState({
            count: 0,
        })
    }


    render() {
        return (
            <>

                <Header count={this.state.count} />

                <OrderMainMenu
                    count={this.state.count}
                    increment={this.increment}
                />

                <Footer/>
            </>
        )
    }
}