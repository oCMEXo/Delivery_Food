import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './use-auth';

const PrivateRoute = () => {
    const token = localStorage.getItem("token");
    const {isAuth} = useAuth(token);

    return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
