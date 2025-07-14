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

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        // Пустой ввод допустим (пока стирают число)
        if (value === '') {
            handleChange(e);
            return;
        }

        // Разрешаем только числа до 100
        const numericValue = parseInt(value);
        if (!isNaN(numericValue) && numericValue <= 100) {
            handleChange(e);
        }
    };


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
                min={1}
                max={100}
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
