import React, {useState, useEffect} from "react";
import Header from "../Components/Layout/Header";
import OrderMainMenu from "../Components/Orders/OrderContent";
import Footer from "../Components/Layout/Footer";
import {AddToOrderProps} from "../App";

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

interface menuProps {
    order: OrderItemMenu[],
    setOrder: (orderItem: OrderItemMenu) => void,
    addToOrder: (props: AddToOrderProps) => void,
    getTotalQuantity: () => number,
}

const Menu: React.FC<menuProps> = ({order, setOrder, addToOrder, getTotalQuantity}) => {


    const [input, setInput] = useState<number>(0);
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

    const handleQuantityChange = (id: string, value: string) => {
        const numericValue = parseInt(value);
        setQuantityMap((prevQuantityMap) => ({
            ...prevQuantityMap,
            [id]: isNaN(numericValue) ? 0 : numericValue,
        }));
    };


    // Check order into basket
    // useEffect(() => {
    //     console.log("Order updated:", order);
    // }, [order]);


    return (
        <>
            <Header/>

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

            <Footer/>
        </>
    );

};

export default Menu;
