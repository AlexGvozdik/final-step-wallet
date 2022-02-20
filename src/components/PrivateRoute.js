import { Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import authSelectors from '../redux/auth/auth-selectors';

export default function PrivateRoute({
    navigateTo,
    element,
    ...routeProps
}) {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return (
        <Route {...routeProps} element={isLoggedIn ? element : <Navigate to={navigateTo} replace />} />
    )
}