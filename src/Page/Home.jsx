import React from 'react';
import Header from "../Components/Layout/Header.jsx";
import HomeComponent from "../Components/ContentMenu/HomeComponent.jsx";
import Footer from "../Components/Layout/Footer.jsx";


export default function Home() {
    return (
        <>
            <Header/>
            <HomeComponent/>
            <Footer/>
        </>
    )
}