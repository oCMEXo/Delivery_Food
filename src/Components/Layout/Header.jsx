import React, {useState} from "react";
import '../../App.css';
import {useNavigate} from "react-router-dom";

import Logo from "../../assets/logo.svg";
import Basket from "../../assets/resp.svg";
import {removeUser} from "../redux/slices/usersSlice.js";
import {useDispatch} from "react-redux";
import Menu from "../../Page/Menu.jsx";

export default function Header({getTotalQuantity}){
    const dispatch = useDispatch();
    const push = useNavigate();
    const [quantityMap, setQuantityMap] = useState({});

    return (
                <header>
                    <div className="contentHeader-Menu">
                        <button className="logo"
                            onClick={() => push("/")}
                        ><img src={Logo} alt="logo" /></button>
                        <div className="buttonHeader-Menu">
                            <div className="buttonNavigation">
                                <button onClick={() => push("/")}>Home</button>
                                <button onClick={() => push("/menu")}>Menu</button>
                                <button onClick={() => push("/")}>Company</button>
                                <button onClick={() => push("/")}>UserName</button>
                                <button onClick={() => dispatch(removeUser())}>
                                    Logout
                                </button>
                            </div>
                            <button className="yourShopping">
                                <img src={Basket} alt="basket" />
                                <i>{getTotalQuantity || '0'}</i>
                            </button>
                        </div>
                    </div>
                </header>
        )

}
