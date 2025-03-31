import React, { Component } from "react";
import '../../App.css';


import Logo from "../../assets/logo.svg";
import Basket from "../../assets/resp.svg";

export default class Header extends Component {
    render() {
        return (
                <header>
                    <div className="contentHeader-Menu">
                        <button className="logo"><img src={Logo} alt="logo" /></button>
                        <div className="buttonHeader-Menu">
                            <div className="buttonNavigation">
                                <a href="#">Home</a>
                                <a href="#">Menu</a>
                                <a href="#">Company</a>
                                <a href="#">UserName</a>
                            </div>
                            <button className="yourShopping">
                                <img src={Basket} alt="basket" />
                                <i>{this.props.count || 0}</i>
                            </button>
                        </div>
                    </div>
                </header>
        );
    }
}
