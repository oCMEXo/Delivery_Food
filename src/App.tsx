import React from 'react';
import Menu from "./Page/Menu";
import Home from "./Page/Home";
import Login from "./Page/Login";
import CreateUser from "./Page/CreateUser";
import {
    BrowserRouter as Router,
    Routes,
    Route, useNavigate, Navigate, BrowserRouter,
} from 'react-router-dom';
import {getAuth} from "firebase/auth";
import PrivateRoute from "./Components/hooks/PrivateRouter";

const App: React.FC = () => {
    // const auth = getAuth();
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/create-user" element={<CreateUser />} />
                <Route
                    path="/menu"
                    element={
                        <PrivateRoute>
                            <Menu />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}


export default App;