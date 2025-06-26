import React  from 'react';
import Header from "../Components/Layout/Header.js";
import HomeComponent from "../Components/ContentMenu/HomeComponent";
import Footer from "../Components/Layout/Footer";



const Home: React.FC = () => {


    return (
        <>
            <Header/>
            <HomeComponent />
            <Footer />
        </>
    );
}

export default Home;
