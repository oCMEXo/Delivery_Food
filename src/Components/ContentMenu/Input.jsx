import React from "react";

export default function Input({input, handleChange, addToOrder, item}) {
    const handleAddToOrder = () => {
        const quantity = parseInt(input) || 0;
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
                max="99"
                style={{
                    color: "black",
                    padding: "10px",
                    display: "flex",
                    alignContent: "center",
                    justifyContent: "center",
                    width: "30px",
                    borderRadius: "6px",
                    border: "1px solid #DDD",
                    background: "#FAFAFA",
                }}
            />
            <button onClick={handleAddToOrder}>Add to cart</button>
        </>
    );
};

