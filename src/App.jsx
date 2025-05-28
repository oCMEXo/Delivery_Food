import React from 'react';
import Menu from "./Page/Menu.tsx";
import Home from "./Page/Home.jsx";
import Login from "./Page/Login.jsx";
import CreateUser from "./Page/CreateUser.jsx";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Home" element={<Home />} />
                <Route path="/menu" element={<Menu/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/createUser" element={<CreateUser/>}/>
            </Routes>
        </Router>
    );
}
