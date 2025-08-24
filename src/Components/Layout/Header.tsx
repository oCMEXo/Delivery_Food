import React, {useContext} from "react";
import '../../App.css';
import {useNavigate} from "react-router-dom";

import Logo from "../../assets/logo.svg";
import Basket from "../../assets/resp.svg";
import {removeUser, selectTotalQuantity} from "../redux/slices/usersSlice";
import {useDispatch, useSelector} from "react-redux";
import {useAuth} from "../hooks/use-auth";
import {ThemeContext} from "../ThemeContext/ThemeContext";


interface PropsHeader {
    order?: any[];
}



const Header: React.FC<PropsHeader> = ({order}) => {
    const dispatch = useDispatch();
    const push = useNavigate();
    const {isAuth} = useAuth();
    const totalQuantity = useSelector(selectTotalQuantity)

    const context = useContext(ThemeContext);
    if (!context) return null;

    const { theme, toggleTheme } = context;


    return (
                <header className={`header ${theme === 'dark' ? 'dark' : ''}`} >
                    <div className="contentHeader-Menu">
                        <button className="logo"
                            onClick={() => push("/")}
                        ><img src={Logo} alt="logo" /></button>
                        <div className="buttonHeader-Menu">
                            <div className="buttonNavigation">
                                <button className={`buttonNavigation button ${theme === 'dark' ? 'dark' : ''}`} onClick={() => push("/")}>Home</button>
                                <button className={`buttonNavigation button ${theme === 'dark' ? 'dark' : ''}`} onClick={() => push("/menu")}>Menu</button>
                                {isAuth ? (
                                    <button className={`buttonNavigation button ${theme === 'dark' ? 'dark' : ''}`} onClick={() => { dispatch(removeUser()); push("/")}}>Logout</button>
                                ) : (
                                    <button className={`buttonNavigation button ${theme === 'dark' ? 'dark' : ''}`} onClick={() => push("/login")}>Login</button>
                                )}
                                <button className={`buttonNavigation button ${theme === 'dark' ? 'dark' : ''}`} onClick={toggleTheme}>
                                    {theme === 'light' ? 'Dark' : 'Light'}
                                </button>
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