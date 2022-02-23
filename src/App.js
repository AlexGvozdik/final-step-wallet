import React, { useEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from './redux/auth';

import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

import Container from './components/Container';

// import AppBar from './components/AppBar';


import Loader from './components/Loader';
import Wrap from './components/Wrap';
import HeaderBackground from './components/HeaderBackground';
import './index.css';

const StatisticView = lazy(() => import('./views/StatisticView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const MainView = lazy(() => import('./views/MainView'));
const LogoutView = lazy(() => import('./views/LogoutView'));

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);
  const isLogedIn = useSelector(authSelectors.getIsLoggedIn);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <div className={isLogedIn ? 'containerBlur' : ''}>
      <HeaderBackground />

      <Container>
        {isFetchingCurrentUser ? (
          <div className="mainLoader">
            <Loader />
          </div>
        ) : (
          <>
            <Suspense
              fallback={
                <div className="mainLoader">
                  <Loader />
                </div>
              }
            >
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
                      <Wrap>
                        <MainView />
                      </Wrap>
                    </PrivateRoute>
                  }
                />

                <Route
                  path="/register"
                  exact
                  element={
                    <PublicRoute redirectTo="/login" restricted>
                      <RegisterView />
                    </PublicRoute>
                  }
                />

                <Route
                  path="/login"
                  exact
                  element={
                    <PublicRoute redirectTo="/home" restricted>
                      <LoginView />
                    </PublicRoute>
                  }
                />

                <Route
                  path="/statistic"
                  element={
                    <PrivateRoute redirectTo="/login">
                      <Wrap>
                        <StatisticView />
                      </Wrap>
                    </PrivateRoute>
                  }
                />

                <Route
                  path="/diagram"
                  element={
                    <PrivateRoute redirectTo="/login">
                      <Wrap />
                    </PrivateRoute>
                  }
                />

                <Route
                  path="/logout"
                  element={
                    <PrivateRoute redirectTo="/login">
                      <LogoutView />
                    </PrivateRoute>
                  }
                />
              </Routes>
            </Suspense>
          </>
        )}
      </Container>
    </div>
  );
}

export default App;
