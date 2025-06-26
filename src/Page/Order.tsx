import React, {useContext} from "react";
import Footer from "../Components/Layout/Footer";
import Header from "../Components/Layout/Header";


import {useDispatch, useSelector} from "react-redux";
import {clearOrder} from "../Components/redux/slices/usersSlice";
import {ThemeContext} from "../Components/ThemeContext/ThemeContext";
import {useNavigate} from "react-router-dom";



const Order: React.FC = () => {
    const dispatch = useDispatch();
    const order = useSelector(state => state.users.order);
    const push = useNavigate();
    const context = useContext(ThemeContext);



    if (!context) return null;
    const { theme, toggleTheme } = context;


    console.log(order);
    return <>
        <Header/>
        <section
            className={`section_order ${theme === 'dark' ? 'dark' : ''}`}

        >
            <h1 className="label_order">Finish your order</h1>
            <ul className="order_list">
                {order.length == 0
                    ? <div style={{
                        display: "flex",
                        gap: "10px",
                        padding: "90px",
                        fontSize: "30px",
                    }}>Your Basket Empty Lets'go making<p style={{
                        fontSize: "30px",
                        borderBottom: '1px solid #fff',
                        cursor: 'pointer'
                    }} onClick={() => push('/menu')}>Order!</p></div>
                    : order.map((order => (
                            <li className={`.order_list li ${theme === 'dark' ? 'dark' : ''}`} key={order}>
                                <div className="order_info_photo_name">
                                    <img src={order.img} alt="burder_image"/>
                                    <p>{order.meal}</p>
                                </div>
                                <div className="order_info_price_count">
                                    <p>${order.price}</p>
                                    <input type="number" value={order.quantity} placeholder="1"/>
                                    <button onClick={() => dispatch(clearOrder(order.id))}>X</button>
                                </div>
                            </li>
                        )))
                }
            </ul>
            <form className={`form_Order ${theme === 'dark' ? 'dark' : ''}`} action="">
                <div className="street_form">
                    <label htmlFor="street">Street</label>
                    <input type="text" name="street" id="street"/>
                </div>
                <div className="house_form">
                    <label htmlFor="house">House</label>
                    <input type="text" name="house" id="house"/>
                </div>
                <button type="submit">Order</button>
            </form>
        </section>
        <Footer/>;
    </>
}

export default Order