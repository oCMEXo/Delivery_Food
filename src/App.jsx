
import React from 'react';
import {Component} from 'react';
import './App.css';
import Header from "./Components/Orders/Header.jsx";
import Footer from "./Components/Orders/Footer.jsx";
import OrderMainMenu from "./Components/Orders/OrderContent.jsx";

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

