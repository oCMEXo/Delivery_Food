import React, { useState, useEffect } from "react";
import Header from "../Components/Layout/Header.js";
import OrderMainMenu from "../Components/Orders/OrderContent.jsx";
import Footer from "../Components/Layout/Footer.tsx";
import {useAuth} from "../Components/hooks/use-auth.js";
import {useNavigate} from "react-router-dom";



interface Meal {
    id: string;
    category: string;
}

interface PropsHeader {
    getTotalQuantity: number;

}

interface OrderItem extends Meal {
    quantity: number;
    order: OrderItem[];
}

const Menu: React.FC = () => {

    const { isAuth } = useAuth();
    const navigate = useNavigate();

    const [input, setInput] = useState<number>(0);
    const [order, setOrder] = useState<OrderItem[]>([]);
    const [error, setError] = useState<Error | null>(null);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [items, setItems] = useState<Meal[]>([]);
    const [quantityMap, setQuantityMap] = useState<{[key: string]: number}>({});
    const [currentItems, setCurrentItems] = useState<Meal[]>([]);




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

    const chooseCategory = (category: string) => {
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




    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        setInput(isNaN(value) ? 0 : value);
    };

    const getTotalQuantity = () => {
        return order.reduce((sum, item) => sum + item.quantity, 0);
    };

    const handleQuantityChange = (id: string, value: number) => {
        setQuantityMap((prevQuantityMap) => ({
            ...prevQuantityMap,
            [id]: value,
        }));
    };

    const addToOrder = (newItem: OrderItem) => {
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

export default Menu;
