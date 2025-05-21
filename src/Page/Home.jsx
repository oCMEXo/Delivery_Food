import React, { useEffect } from 'react';
import Header from "../Components/Layout/Header.jsx";
import HomeComponent from "../Components/ContentMenu/HomeComponent.jsx";
import Footer from "../Components/Layout/Footer.jsx";
import { useAuth } from "../Components/hooks/use-auth.js";
import { useDispatch } from "react-redux";
import { removeUser } from "../Components/redux/slices/usersSlice.js";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const { isAuth, email } = useAuth();
    const dispatch = useDispatch();
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
