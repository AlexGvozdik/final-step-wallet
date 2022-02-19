import { Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import authSelectors from '../redux/auth/auth-selectors';

export default function PublicRoute({
    restricted = false,
    navigateTo,
    element,
    ...routeProps
}) {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return (
        <Route {...routeProps} element={(isLoggedIn && restricted) ? <Navigate to={navigateTo} replace/> : element } />
    )
}