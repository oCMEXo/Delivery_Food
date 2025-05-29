import React, { useEffect } from 'react';
import Header from "../Components/Layout/Header.js";
import HomeComponent from "../Components/ContentMenu/HomeComponent";
import Footer from "../Components/Layout/Footer.tsx";
import { useAuth } from "../Components/hooks/use-auth.ts";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
    const { isAuth,  } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuth) {
            navigate("/login");
        }
    }, [isAuth, navigate]);

    if (!isAuth) {
        return null;
    }

    return (
        <>
            <Header />
            <HomeComponent />
            <Footer />
        </>
    );
}

export default Home;
