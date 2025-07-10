import React, {JSX, useEffect, useState} from 'react';
import Menu, {OrderItemMenu, OrderItemWithQuantity} from "./Page/Menu";
import Home from "./Page/Home";
import Login from "./Page/Login";
import CreateUser from "./Page/CreateUser";
import Order from "./Page/Order";
import {
    BrowserRouter as Router,
    Routes,
    Route, useNavigate, Navigate, BrowserRouter,
} from 'react-router-dom';
import PrivateRoute from "./Components/hooks/PrivateRouter";
import {useDispatch, useSelector} from 'react-redux';
import {onAuthStateChanged} from 'firebase/auth';
import {addOrder, removeUser, setUser} from './Components/redux/slices/usersSlice';
import {auth} from './fire_base.js';
import {ThemeProvider} from "./Components/ThemeContext/ThemeContext";
import PageLoader from './Components/ContentMenu/PageLoader';


export interface AddToOrderProps {
    newItem: OrderItemWithQuantity;
    someOtherProp?: string;
    anotherProp?: number;
}

const App: React.FC = () => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const order = useSelector((state) => state.users.order);


    const handleAddToOrder = (item: OrderItemWithQuantity) => {
        dispatch(addOrder(item));
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // console.log("User is logged in:", user)
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
        <ThemeProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={
                        <PageLoader isLoading={loading} isLoggedIn={isLoggedIn}>

                            <Home/>

                        </PageLoader>
                    }/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/create-user" element={<CreateUser/>}/>
                    <Route element={<PrivateRoute/>}>
                        <Route path="/menu" element={
                            <PageLoader isLoading={loading} isLoggedIn={isLoggedIn}>
                                <Menu
                                    order={order}
                                    addToOrder={handleAddToOrder}
                                    setOrder={() => {}}
                                />
                            </PageLoader>
                        }/>
                        <Route path={"/order"} element={
                            <PageLoader isLoading={loading} isLoggedIn={isLoggedIn}>
                                <Order/>

                            </PageLoader>
                        }/>
                    </Route>

                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}




export default App;
