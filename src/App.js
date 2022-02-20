import React, { lazy, Suspense } from "react";
// import MainView from "./views/MainView/MainView";
// import RegisterPage from "./views/RegisterView";
import { Routes, Route } from "react-router-dom";
// import LoginView from "./views/LoginView";
// import Header from "./components/HeaderNav/HeaderNav";
import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { authOperations } from "./redux/auth";
const RegisterPage = lazy(() => import("./views/RegisterView"));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Suspense fallback={<div className="mainLoader">{/* <Loader /> */}</div>}>
        {/* <MainView /> */}
        <div>
          <Routes>
            <Route
              path="/"
              element={
                <PrivateRoute redirectTo="/home" restricted></PrivateRoute>
              }
            />
            <Route
              exact
              path="/home"
              element={
                <PrivateRoute redirectTo="/login">
                  {/* <LoginView /> */}
                </PrivateRoute>
              }
            />
            <Route
              path="/signup"
              exact
              element={
                <PublicRoute redirectTo="/login" restricted>
                  <RegisterPage />
                </PublicRoute>
              }
            />
            {/* <Route path="/signup" exact element={<RegisterPage />} /> */}
            {/* <Route path="/" exact element={<Header />} /> */}
            {/* <Route path="/login" element={<LoginView />} /> */}
          </Routes>
        </div>
      </Suspense>
    </>
  );
};

export default App;
