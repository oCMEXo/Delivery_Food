import React, { Component } from "react";
import '../../public/Order.css';
import logo from "../../assets/logo.svg";
import basket from "../../assets/resp.svg";

// Компонент Header принимает cartCount из пропсов
export default class Header extends Component {
    render() {
        return (
            <>
                <header>
                    <div className="contentHeader-Menu">
                        <button className="logo"><img src={logo} alt="logo" /></button>
                        <div className="buttonHeader-Menu">
                            <div className="buttonNavigation">
                                <a href="#">Home</a>
                                <a href="#">Menu</a>
                                <a href="#">Company</a>
                                <a href="#">UserName</a>
                            </div>
                            <button className="yourShopping">
                                <img src={basket} alt="basket" />
                                <i>0</i>
                            </button>
                        </div>
                    </div>
                </header>
            </>
        );
    }
}
