import { Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import authSelectors from '../redux/auth/auth-selectors';

export default function PrivateRoute({
    navigateTo,
    children,
}) {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    console.log(isLoggedIn)
    return isLoggedIn ? children : <Navigate to={navigateTo} replace />
}
