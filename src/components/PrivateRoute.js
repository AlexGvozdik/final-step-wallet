import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { authSelectors } from "../redux/auth";

export default function PrivateRoute({
  children,
  redirectTo = "/signup",
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return <div>{isLoggedIn ? children : <Navigate to={redirectTo} />}</div>;
}
