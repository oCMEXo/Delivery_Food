import React from 'react';
import './App.css';
import Menu from "./Page/Menu.jsx";
import Home from "./Page/Home.jsx";
import Footer from "./Components/Layout/Footer.jsx";
import Login from "./Page/Login.jsx";
import CreateUser from "./Page/CreateUser.jsx";
import {Router} from "react-router-dom";

export default function App() {
    return (
        <CreateUser />
    );
}
