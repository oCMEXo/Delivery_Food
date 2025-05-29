import React from "react";
import '../../App.css';
import {useNavigate} from "react-router-dom";
import {OrderItemMenu} from "../../Page/Menu"

import Logo from "../../assets/logo.svg";
import Basket from "../../assets/resp.svg";
import {removeUser} from "../redux/slices/usersSlice";
import {useDispatch} from "react-redux";
import {useAuth} from "../hooks/use-auth";


interface PropsHeader {
    getTotalQuantity?: number;
    order?: any[];
}

const Header: React.FC<PropsHeader> = ({getTotalQuantity, order }) => {
    const dispatch = useDispatch();
    const push = useNavigate();
    const {isAuth} = useAuth();
    // console.log(order);
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
                                {isAuth ? <button onClick={() => dispatch(removeUser())}>
                                    Logout
                                </button> : ''}
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

export default Header;