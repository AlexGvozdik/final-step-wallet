import React from "react";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import {Oval} from 'react-loader-spinner';
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import MainView from './views/MainView/MainView';
import NotFoundView from './views/NotFoundView/NotFoundView';
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { authOperations } from "./redux/auth";
import LoginView from './views/LoginView';
import Header from './components/HeaderNav/HeaderNav';

const MainView = lazy(() => import('./views/MainView' /* WebpackChunkName: "main-view" */)) ;
const LoginView = lazy(() => import('./views/LoginView' /* WebpackChunkName: "login-view" */));
const LogoutView = lazy(() => import('./views/LogoutView' /* WebpackChunkName: "logout-view" */));
const RegisterView = lazy(() => import('./views/RegisterView' /* WebpackChunkName: "register-view" */));
const StatisticView = lazy(() => import('./views/StatisticView' /* WebpackChunkName: "statistics-view" */));


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <MainView />
      <div>
        <Routes>
          <Route path="/" exact element={<Header />} />
          <Route path="/login" element={<LoginView />} />
        </Routes>
      </div>
    </>

    <Suspense fallback={
      <Oval
        color="#4A56E2"
        height={100}
        width={100}
        style={{ textAlign: 'center', marginTop: '300px' }}
      />
    }>
      <Routes>
        <PrivateRoute path="/" navigateTo={'login'} element={<MainView />} />

        <PublicRoute path="login" navigateTo={'/'} restricted >
          <LoginView />
        </PublicRoute>

        <PublicRoute path="registration" navigateTo={'/'} restricted >
          <RegisterView />
        </PublicRoute>

        <PrivateRoute path="statistics" navigateTo={'login'} element={<StatisticView />} />
          
        {/* 
        not sure if that should be a separate route or just a modal asking for confirmation
        <PrivateRoute path="logout" navigateTo={'login'} >
          <LogoutView />
        </PrivateRoute> */}
      </Routes>
    </Suspense>
  );
};

export default App;
