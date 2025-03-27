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
    }


    incrementCount = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1,
        }));
    };


    render() {


        return (
            <>

                <Header count={this.state.count}/>

                <OrderMainMenu
                    count={this.state.count}
                    incrementCount={this.incrementCount} />

                <Footer/>
            </>
        )
    }
}