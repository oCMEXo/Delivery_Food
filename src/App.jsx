import React, { Component } from 'react';
import './App.css';
import Header from "./Components/Layout/Header.jsx";
import Footer from "./Components/Layout/Footer.jsx";
import OrderMainMenu from "./Components/Orders/OrderContent.jsx";
import Menu from "./Page/Menu.jsx"; // Компонент с кнопками "Add to cart"

export default class App extends Component {
    render() {
        return (
            <Menu />
        );
    }
}
