import React, {useState, useEffect} from "react";
import Header from "../Components/Layout/Header";
import OrderMainMenu from "../Components/Orders/OrderContent";
import Footer from "../Components/Layout/Footer";
import {AddToOrderProps} from "../App";
import NotFoundPage from "./404/NotFoundPage";
import {URL_MEALS} from "../__mock__/__mock__";

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
}

const Menu: React.FC<menuProps> = ({ setOrder, addToOrder, }) => {


    const [input, setInput] = useState<number>(0);
    const [error, setError] = useState<Error | null>(null);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [items, setItems] = useState<OrderItemMenu[]>([]);
    const [quantityMap, setQuantityMap] = useState<{ [key: string]: number }>({});
    const [currentItems, setCurrentItems] = useState<OrderItemMenu[]>([]);


    useEffect(() => {
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
        }, [URL_MEALS]);

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

            {error
                ? (<div style={{paddingTop: "120px",}}><NotFoundPage error={error}/></div>)
                : (
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
                )}

            <Footer/>
        </>
    );

};

export default Menu;
