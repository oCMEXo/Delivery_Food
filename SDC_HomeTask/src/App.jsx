import React from 'react';
import {Component} from 'react';
import './App.css';
import Header from "./Component/Header.jsx";
import Footer from "./Component/Footer.jsx";
import OrderMainMenu from "./Component/OrdersJSX/OrderContent.jsx";

export default class App extends Component {
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

