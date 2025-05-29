import React from 'react';
import Menu from "./Page/Menu";
import Home from "./Page/Home";
import Login from "./Page/Login";
import CreateUser from "./Page/CreateUser";
import {
    BrowserRouter as Router,
    Routes,
    Route, useNavigate, Navigate,
} from 'react-router-dom';
import {getAuth} from "firebase/auth";


const App: React.FC = () => {
    const auth = getAuth();
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={
                    auth ? <Menu/> : <Navigate to="/login" replace/>
                }/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/create-user" element={<CreateUser/>}/>
            </Routes>
        </Router>
    );
}


export default App;