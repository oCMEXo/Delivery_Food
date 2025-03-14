import React, { Component } from 'react';
import './App.css';
import Header from "./Component/Header.jsx";
import Footer from "./Component/Footer.jsx";
import OrderMainMenu from "./Component/OrdersJSX/OrderContent.jsx"; // Компонент с кнопками "Add to cart"

export default class App extends Component {
    render() {
        return (
            <>
                {/* Передаем cartCount в Header для отображения в корзине */}
                <Header />

                {/* Передаем incrementCart в OrderMainMenu, чтобы обновить cartCount */}
                <OrderMainMenu />

                <Footer />
            </>
        );
    }
}
