import React, { useState, useEffect } from "react";
import Header from "../Components/Layout/Header.jsx";
import OrderMainMenu from "../Components/Orders/OrderContent.jsx";
import Footer from "../Components/Layout/Footer.jsx";
import {useAuth} from "../Components/hooks/use-auth.js";
import {useNavigate} from "react-router-dom";

export default function Menu(){
    const { isAuth } = useAuth();
    const navigate = useNavigate();
    const [input, setInput] = useState(0);
    const [order, setOrder] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [quantityMap, setQuantityMap] = useState({});
    const [currentItems, setCurrentItems] = useState([]);




    useEffect(() => {
        const URL_MEALS = "https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals";
        fetch(URL_MEALS)
            .then((res) => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, []);

    useEffect(() => {
        setCurrentItems(items);
    }, [items]);

    const chooseCategory = (category) => {
        setCurrentItems(items.filter((el) => el.category === category));

    };

    useEffect(() => {
        if (!isAuth) {
            navigate("/login");
        }
    }, [isAuth, navigate]);

    if (!isAuth) {
        return null;
    }




    const handleChange = (e) => {
        setInput(parseInt(e.target.value));
    };

    const getTotalQuantity = () => {
        return order.reduce((sum, item) => sum + item.quantity, 0);
    };

    const handleQuantityChange = (id, value) => {
        setQuantityMap((prevQuantityMap) => ({
            ...prevQuantityMap,
            [id]: value,
        }));
    };

    const addToOrder = (newItem) => {
        setOrder((prevOrder) => {
            const updatedOrder = [...prevOrder];
            const existingIndex = updatedOrder.findIndex((item) => item.id === newItem.id);

            if (existingIndex !== -1) {
                updatedOrder[existingIndex].quantity += newItem.quantity;
            } else {
                updatedOrder.push(newItem);
            }
            return updatedOrder;
        });

        console.log("Order:", order);
    };


    if (error) {
        return <p>Error: {error.message}</p>;
    } else if (!isLoaded) {
        return <p>Loading...</p>;
    } else {

        return (
            <>
                <Header getTotalQuantity={getTotalQuantity()} order={order} />

                <OrderMainMenu
                    error={error}
                    isLoaded={isLoaded}
                    items={currentItems}
                    addToOrder={addToOrder}
                    input={input}
                    handleChange={handleChange}
                    quantityMap={quantityMap}
                    handleQuantityChange={handleQuantityChange}
                    chooseCategory={chooseCategory}
                />
                <Footer />
            </>
        );
    }
};

