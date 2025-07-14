import React, { FC, ChangeEvent } from "react";

interface OrderItem {
    id: string;
    img: string;
    meal: string;
    price: number;
    instructions?: string;
}

interface InputProps {
    input: string | number;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    addToOrder: (item: OrderItem & { quantity: number }) => void;
    item: OrderItem;
    quantityMap: { [key: string]: number | string };
}

const Input: FC<InputProps> = ({ input, handleChange, addToOrder, item }) => {
    const handleAddToOrder = () => {
        const quantity = typeof input === "string" ? parseInt(input) : input;
        if (quantity > 0) {
            addToOrder({
                ...item,
                quantity,
            });
        }
    };

    return (
        <>
            <input
                type="number"
                placeholder="0"
                value={input}
                onChange={handleChange}

                style={{
                    textAlign: 'center',
                    color: "black",
                    padding: "10px",
                    display: "flex",
                    alignContent: "center",
                    justifyContent: "center",
                    width: "50px",
                    borderRadius: "6px",
                    border: "1px solid #DDD",
                    background: "#FAFAFA",
                }}
            />
            <button onClick={handleAddToOrder}>Add to cart</button>
        </>
    );
};

export default Input;
