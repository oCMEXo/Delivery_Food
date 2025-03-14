import React, {Component} from "react";
import Header from "../../Component/Header.jsx";
import OrderMainMenu from "../../Component/OrdersJSX/OrderContent.jsx";
import Footer from "../../Component/Footer.jsx";

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