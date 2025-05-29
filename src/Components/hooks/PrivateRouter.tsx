import { Navigate } from 'react-router-dom';
import { useAuth } from './use-auth';
import { ReactElement } from 'react';

interface PrivateRouteProps {
    children: ReactElement;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
    const { isAuth } = useAuth();

    return isAuth ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
