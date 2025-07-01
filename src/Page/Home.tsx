import React  from 'react';
import Header from "../Components/Layout/Header.js";
import HomeComponent from "../Components/ContentMenu/HomeComponent";
import Footer from "../Components/Layout/Footer";
import {OrderItemMenu} from "./Menu";


interface HomeProps {
    order:OrderItemMenu[],
    getTotalQuantity: () => number,
}

const Home: React.FC<HomeProps> = () => {


    return (
        <>
            <Header/>
            <HomeComponent />
            <Footer />
        </>
    );
}

export default Home;
