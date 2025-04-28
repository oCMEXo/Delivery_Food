import React from "react";
import {categories} from "./Navigation_Tabs.js";

export default function CategoriesButtonNavigation({chooseCategory}){

    return (
        <div className="Categories_button_Navigation">
            {categories.map((el) => (
                <button key={el.id} onClick={() => chooseCategory(el.id)}>{el.name}</button>
            ))}
        </div>
    );
};

