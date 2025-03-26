import {Component} from "react";
import '../../public/Order.css'
import logo from "../../assets/logo.svg";
import basket from "../../assets/resp.svg";

export default class Header extends Component {
    render() {
        return (
                <header className="contentHeader-Menu">
                        <button className="logo"><img src={logo} alt="logo"/>
                        </button>
                        <div className="buttonHeader">
                            <div className="buttonNavigation">
                                <a href="#">Home</a>
                                <a href="#">Menu</a>
                                <a href="#">Company</a>
                                <a href="#">UserName</a>
                            </div>
                            <button className="yourShopping">
                                <img src={basket} alt="basket"/>
                                <i>0</i>
                            </button>
                        </div>
                </header>
        )
    }
}