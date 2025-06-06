import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './use-auth';

const PrivateRoute = () => {
    const {isAuth} = useAuth();
    console.log(isAuth);
    return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
