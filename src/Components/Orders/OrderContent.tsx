import React, { useState } from 'react';
import '../../App.css';
import ContentMenuMain from "../ContentMenu/ContentMenu";
import Categories_buttonNavigation from "../ContentMenu/Categories_button_Navigation";
import { OrderItemWithQuantity, OrderItemMenu } from "./../../Page/Menu"



interface OrderMainMenuProps {
    error: Error | null;
    isLoaded: boolean;
    items: OrderItemMenu[];
    addToOrder: (newItem: OrderItemWithQuantity) => void;
    input: number;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    quantityMap: { [key: string]: number };
    handleQuantityChange: (id: string, value: string) => void;
    chooseCategory: (category: string) => void;
}


const OrderMainMenu: React.FC<OrderMainMenuProps> = ({
                                                         isLoaded,
                                                         chooseCategory,
                                                         items,
                                                         addToOrder,
                                                         quantityMap,
                                                         handleQuantityChange,
                                                     }) => {
    const [isMessageVisible, setIsMessageVisible] = useState(false);

    const handleMouseEnter = () => setIsMessageVisible(true);
    const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsMessageVisible(false);
    };

    return (
        <main className="mainManu">
            <div className="infoPageMenu">
                <h1>Browse our menu</h1>
                <div className="labelMenu">
                    Use our menu to place an order online, or
                    <button
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        className="phone"
                    >
                        phone
                    </button>
                    our store to place a pickup order. Fast and fresh food.
                </div>
                {isMessageVisible && <div className="message">+370453020340</div>}
            </div>

            <div className="buttonChoiceEating">
                <Categories_buttonNavigation chooseCategory={chooseCategory} />
            </div>

            {!isLoaded

                ? (<div>Loading</div>)
                : (
                    <ContentMenuMain
                        items={items}
                        addToOrder={addToOrder}
                        quantityMap={quantityMap}
                        handleQuantityChange={handleQuantityChange}
                    />
                )}
        </main>
    );
};

export default OrderMainMenu;
