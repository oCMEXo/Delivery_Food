import React, {useState} from "react";
import '../../App.css';
import Input from "./Input.jsx";




export default function ContentMenuMain({ items, addToOrder, quantityMap, handleQuantityChange }) {
    const [expandedTextId, setExpandedTextId] = useState(null);
    const [visibleBox, setVisibleBox] = useState(6);

    const handleVisibleSeeMore = () => {
        setVisibleBox((prevVisibleBox) => prevVisibleBox + visibleBox);
    };

    const handleTextToggle = (id) => {
        setExpandedTextId((prevExpandedTextId) => (prevExpandedTextId === id ? true : id));
    };

    const truncateText = (text, maxLength = 90, id) => {
        if (!text) return "";

        if (expandedTextId !== id) {
            return (
                <>
                    {text.length > maxLength ? (
                        <>
                            {text.slice(0, maxLength)}{" "}
                            <button
                                style={{
                                    border: "none",
                                    backgroundColor: "transparent",
                                    cursor: "pointer",
                                    color: "black",
                                }}
                                onClick={() => handleTextToggle(id)}
                            >
                                (Read more...)
                            </button>
                        </>
                    ) : (
                        text
                    )}
                </>
            );
        }

        return text;
    };

    const visibleItems = items.slice(0, visibleBox);
    const MoreItems = visibleBox < items.length;

    return (
        <>
            <ul>
                {visibleItems.map((item) => (
                    <li key={item.id}>
                        <img src={item.img} alt={item.meal} />
                        <div className="contentBlog">
                            <div className="nameAndCost">
                                <h3>{item.meal}</h3>
                                <p>${item.price}</p>
                            </div>
                            <p className="ipsum">{truncateText(item.instructions, 80, item.id)}</p>
                            <div className="sizeAdd">
                                <Input
                                    addToOrder={addToOrder}
                                    item={item}
                                    input={quantityMap?.[item.id] || ""}
                                    handleChange={(e) =>
                                        handleQuantityChange(item.id, e.target.value)
                                    }
                                    quantityMap={quantityMap}
                                />
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            {MoreItems && (
                <button className="seeMore" onClick={handleVisibleSeeMore}>
                    See more
                </button>
            )}
        </>
    );
};

