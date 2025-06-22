import React from "react";
import '../../App.css';
import {useNavigate} from "react-router-dom";

import Logo from "../../assets/logo.svg";
import Basket from "../../assets/resp.svg";
import {removeUser, selectTotalQuantity} from "../redux/slices/usersSlice";
import {useDispatch, useSelector} from "react-redux";
import {useAuth} from "../hooks/use-auth";


interface PropsHeader {
    order?: any[];
}



const Header: React.FC<PropsHeader> = ({order}) => {
    const dispatch = useDispatch();
    const push = useNavigate();
    const {isAuth} = useAuth();
    const totalQuantity = useSelector(selectTotalQuantity)

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
                                {isAuth ? (
                                    <button onClick={() => dispatch(removeUser())}>Logout</button>
                                ) : (
                                    <button onClick={() => push("/login")}>Login</button>
                                )}
                            </div>
                            <button className="yourShopping" onClick={() => push("/order", {state: order} )}>
                                <img src={Basket} alt="basket" />
                                <i>{isAuth ? totalQuantity : '0'}</i>
                            </button>
                        </div>
                    </div>
                </header>
        )

}


export default Header;