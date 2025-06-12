import React, {useState} from 'react';
import '../../App.css';
import ContentMenuMain from "../ContentMenu/ContentMenu.jsx";
import Categories_button_Navigation from "../ContentMenu/Categories_button_Navigation.jsx";

export default function OrderMainMenu({

                                          chooseCategory,
                                          error,
                                          isLoaded,
                                          items,
                                          addToOrder,
                                          input,
                                          handleChange,
                                          quantityMap,
                                          handleQuantityChange
                                      }) {

    const [isMessageVisible, setIsMessageVisible] = useState(false);


    const handleMouseEnter = () => {
        setIsMessageVisible(true);
    };

    const handleMouseLeave = (e) => {
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
                {isMessageVisible && (
                    <div className="message">+370453020340</div>
                )}
            </div>

            <div className="buttonChoiceEating">
                <Categories_button_Navigation
                    chooseCategory={chooseCategory}
                />

            </div>


            <ContentMenuMain
                error={error}
                isLoaded={isLoaded}
                items={items}
                addToOrder={addToOrder}
                input={input}
                handleChange={handleChange}
                quantityMap={quantityMap}
                handleQuantityChange={handleQuantityChange}
            />
        </main>
    );
};

