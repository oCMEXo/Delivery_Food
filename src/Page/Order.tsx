import React, {ChangeEvent, useContext, useMemo, useState} from "react";
import Footer from "../Components/Layout/Footer";
import Header from "../Components/Layout/Header";


import {useDispatch, useSelector} from "react-redux";
import {clearOrder, decreaseQuantity, incrementQuantity} from "../Components/redux/slices/usersSlice";
import {ThemeContext} from "../Components/ThemeContext/ThemeContext";
import {useNavigate} from "react-router-dom";


const Order: React.FC = () => {
    const dispatch = useDispatch();
    const order = useSelector(state => state.users.order);
    const push = useNavigate();
    const context = useContext(ThemeContext);


    const [inputValueStreet, setInputValueStreet] = useState("");
    const [inputValueHouse, setInputValueHouse] = useState("");


    const handleChangeStreet = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValueStreet(e.target.value);
    };
    const handleChangeHouse = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValueHouse(e.target.value);
    };

    const handleSubmitFinalOrder = async (e: React.FormEvent) =>  {
        // e.preventDefault(); // предотврати перезагрузку страницы
        alert(`Final order submitted! Total: $${totalPrice.toFixed(2)}`);
        alert(`${JSON.stringify(order)}`)
        alert(`${inputValueStreet}: ${inputValueHouse}`);
        dispatch(clearOrder())
    }

    const totalPrice = useMemo(() => {
        return order.reduce((sum, item) => sum + item.price * item.quantity, 0);
    }, [order]);


    if (!context) return null;
    const {theme, toggleTheme} = context;


    console.log(order);
    return <>
        <Header/>
        <section
            className={`section_order ${theme === 'dark' ? 'dark' : ''}`}

        >
            <h1 className="label_order">Finish your order</h1>
            <form className={`form_Order ${theme === 'dark' ? 'dark' : ''}`} action="">
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
                                    <p>${(order.price * order.quantity).toFixed(2)}</p>

                                    <button style={{}} onClick={(e) => {
                                        e.preventDefault();
                                        dispatch(incrementQuantity(order.id))
                                    }}>+
                                    </button>
                                    <input style={{
                                        width: "50px",
                                        marginLeft: '0'
                                    }} type="number" value={order.quantity}/>
                                    <button disabled={order.quantity <= 1} onClick={(e) => {
                                        e.preventDefault();
                                        dispatch(decreaseQuantity(order.id))
                                    }}>-
                                    </button>
                                    <button onClick={(e) => {
                                        e.preventDefault();
                                        dispatch(clearOrder(order.id))
                                    }}>X
                                    </button>
                                </div>
                            </li>
                        )))
                    }

                </ul>
                <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
                <div className="street_form">
                    <label htmlFor="street">Street</label>
                    <input
                        style={{
                            padding: "10px",
                            outline: "none",
                        }}
                        type="text" name="street" id="street"
                        value={inputValueStreet}
                        onChange={handleChangeStreet}/>
                </div>
                <div className="house_form">
                    <label htmlFor="house">House</label>
                    <input
                        style={{
                            padding: "10px",
                            outline: '0',
                        }}
                        type="text" name="house" id="house"
                           value={inputValueHouse}
                           onChange={handleChangeHouse}/>
                </div>
                <button onClick={handleSubmitFinalOrder} type='submit'>Order</button>
            </form>
        </section>
        <Footer/>;
    </>
}

export default Order