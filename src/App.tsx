import React, {JSX, useEffect, useState} from 'react';
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
import {useDispatch} from 'react-redux';
import {onAuthStateChanged} from 'firebase/auth';
import {removeUser, setUser} from './Components/redux/slices/usersSlice';
import {auth} from './fire_base.js';

const App: React.FC = () => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)
    const [isLoggedIn, setIsLoggedIn] = useState(false)




    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log("User is logged in:", user)
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken,
                }));
                setIsLoggedIn(true)
            } else {
                console.log("User is logged out")
                dispatch(removeUser())
                setIsLoggedIn(false)
            }
            setLoading(false)
        })

        return () => unsubscribe()
    }, [dispatch])
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <PageLoader isLoading={loading} isLoggedIn={isLoggedIn}>
                        <Home/>
                    </PageLoader>
                }/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/create-user" element={<CreateUser/>}/>
                <Route element={<PrivateRoute />}>
                    <Route path="/menu" element={
                        <PageLoader isLoading={loading} isLoggedIn={isLoggedIn}>
                            <Menu/>
                        </PageLoader>
                    }/>
                </Route>

            </Routes>
        </BrowserRouter>
    );
}


function PageLoader({children, isLoading, isLoggedIn}) {
    if (isLoading)
        return (
            <div className=''>
                Loading
            </div>
        )
    if (!isLoggedIn) return <Navigate to='/login'/>
    return children as JSX.Element
}




export default App;
