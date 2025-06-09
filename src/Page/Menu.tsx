import React, { useState, useEffect } from "react";
import Header from "../Components/Layout/Header";
import OrderMainMenu from "../Components/Orders/OrderContent";
import Footer from "../Components/Layout/Footer";
import { useAuth } from "../Components/hooks/use-auth";
import { useNavigate } from 'react-router-dom';

export interface OrderItemMenu {
    id: string;
    category: string;
    img: string;
    meal: string;
    price: number;
    instructions?: string;
    quantity?: number;
}

export type OrderItemWithQuantity = OrderItemMenu & { quantity: number };


const Menu: React.FC = () => {
    // const push = useNavigate();
    // const auth = useAuth()
    //
    // if()

    const [input, setInput] = useState<number>(0);
    const [order, setOrder] = useState<OrderItemMenu[]>([]);
    const [error, setError] = useState<Error | null>(null);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [items, setItems] = useState<OrderItemMenu[]>([]);
    const [quantityMap, setQuantityMap] = useState<{ [key: string]: number }>({});
    const [currentItems, setCurrentItems] = useState<OrderItemMenu[]>([]);


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

    useEffect(() => {
        const localOrder = localStorage.getItem('order')
        if (localOrder) setOrder(JSON.parse(localOrder))
    }, [])

    const chooseCategory = (category: string) => {
        setCurrentItems(items.filter((el) => el.category === category));

    };




    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        setInput(isNaN(value) ? 0 : value);
    };

    const getTotalQuantity = () => {
        return order.reduce((sum, item) => sum + (item.quantity ?? 0), 0);
    };

    const handleQuantityChange = (id: string, value: string) => {
        const numericValue = parseInt(value);
        setQuantityMap((prevQuantityMap) => ({
            ...prevQuantityMap,
            [id]: isNaN(numericValue) ? 0 : numericValue,
        }));
    };

    const addToOrder = (newItem: OrderItemWithQuantity) => {
        setOrder((prevOrder) => {
            const updatedOrder = [...prevOrder];
            const existingIndex = updatedOrder.findIndex((item) => item.id === newItem.id);

            if (existingIndex !== -1) {
                updatedOrder[existingIndex].quantity =
                    (updatedOrder[existingIndex].quantity ?? 0) + newItem.quantity;
            } else {
                updatedOrder.push(newItem);
            }

            localStorage.setItem('order', JSON.stringify(updatedOrder))
            return updatedOrder;
        });

    };


    // Check order into basket
    // useEffect(() => {
    //     console.log("Order updated:", order);
    // }, [order]);



    // if (error) {
    // return <p>Error: {error.message}</p>;
    // } else if (!isLoaded) {
    // return <p>Loading...</p>;
    // } else {

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

};

export default Menu;
