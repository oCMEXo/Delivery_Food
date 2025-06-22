import React  from 'react';
import Header from "../Components/Layout/Header.js";
import HomeComponent from "../Components/ContentMenu/HomeComponent";
import Footer from "../Components/Layout/Footer";
import {OrderItemMenu} from "./Menu";


interface HomeProps {
    order:OrderItemMenu[],
    getTotalQuantity: () => number,
}

const Home: React.FC<HomeProps> = ({order, getTotalQuantity}) => {


    return (
        <>
            <Header
                // getTotalQuantity={getTotalQuantity()}
                // order={order}
            />
            <HomeComponent />
            <Footer />
        </>
    );
}

export default Home;
