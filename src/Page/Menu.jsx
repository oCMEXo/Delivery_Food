import React, {Component} from "react";
import Header from "../Components/Layout/Header.jsx";
import OrderMainMenu from "../Components/Orders/OrderContent.jsx";
import Footer from "../Components/Layout/Footer.jsx";

export default class Menu extends Component {
    render() {
        return (
            <>
                <Header/>

                <OrderMainMenu/>

                <Footer/>
            </>
        )
    }
}