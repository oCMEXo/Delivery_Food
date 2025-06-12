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
import PrivateRoute from "./Components/hooks/PrivateRouter";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/create-user" element={<CreateUser/>}/>
                <Route element={<PrivateRoute />}>
                    <Route path="/menu" element={<Menu/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}


export default App;