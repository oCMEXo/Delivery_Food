import React from "react";
import Footer from "../Components/Layout/Footer";
import Header from "../Components/Layout/Header";


import BG_Shape from "../assets/BG Shape Content.png"
import {useDispatch, useSelector} from "react-redux";
import {clearOrder} from "../Components/redux/slices/usersSlice";



const Order: React.FC<PropsOrder> = () => {
    const dispatch = useDispatch();
    const order = useSelector(state => state.users.order);



    console.log(order);
    return <>
        <Header/>
        <section
            className="section_order"
            style={{
                marginTop: '85px',
                backgroundImage: `url(${BG_Shape})`,
                backgroundSize: '100% 100%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}
        >
            <h1 className="label_order">Finish your order</h1>
            <ul className="order_list">
                {order.length == 0
                    ? <div>Корзина Пуста</div>
                    : order.map((order => (
                            <li key={order}>
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
            <form className="form_Order" action="">
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