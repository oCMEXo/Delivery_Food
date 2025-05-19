import React from "react";
import '../../App.css';
import {useNavigate} from "react-router-dom";

import Logo from "../../assets/logo.svg";
import Basket from "../../assets/resp.svg";

export default function Header({getTotalQuantity}){
    const push = useNavigate();
        return (
                <header>
                    <div className="contentHeader-Menu">
                        <button className="logo"
                            onClick={() => push("/")}
                        ><img src={Logo} alt="logo" /></button>
                        <div className="buttonHeader-Menu">
                            <div className="buttonNavigation">
                                <a href="#">Home</a>
                                <a href="#">Menu</a>
                                <a href="#">Company</a>
                                <a href="#">UserName</a>
                            </div>
                            <button className="yourShopping">
                                <img src={Basket} alt="basket" />
                                <i>{getTotalQuantity || '0'}</i>
                            </button>
                        </div>
                    </div>
                </header>
        );

}
