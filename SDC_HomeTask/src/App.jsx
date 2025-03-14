import React, { Component } from 'react';
import './App.css';
import Header from "./Component/Header.jsx";
import Footer from "./Component/Footer.jsx";
import OrderMainMenu from "./Component/OrdersJSX/OrderContent.jsx";
import Menu from "./Page/Menu/Menu.jsx"; // Компонент с кнопками "Add to cart"

export default class App extends Component {
    render() {
        return (
            <Menu />
        );
    }
}
