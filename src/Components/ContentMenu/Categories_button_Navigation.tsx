import React, {FC} from "react";
import {categories} from "./Navigation_Tabs";



interface CategoriesButtonNavigationProps {
    chooseCategory: (category: string) => void;
}
const CategoriesButtonNavigation: FC<CategoriesButtonNavigationProps> = ({chooseCategory}) =>{

    return (
        <div className="Categories_button_Navigation">
            {categories.map((el) => (
                <button key={el.id} onClick={() => chooseCategory(el.id)}>{el.name}</button>
            ))}
        </div>
    );
};

export default CategoriesButtonNavigation;

