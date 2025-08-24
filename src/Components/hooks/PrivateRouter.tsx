import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './use-auth';

const PrivateRoute = () => {
    const { isAuth } = useAuth(); // loading можно прокинуть через context или store

    return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
