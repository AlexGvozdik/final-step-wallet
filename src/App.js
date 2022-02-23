import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, Router } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from './redux/auth';

import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import Spinner from './components/Spinner';
import Header from './components/HeaderNav/HeaderNav';


import { Oval } from 'react-loader-spinner';



const MainView = lazy(() =>
  import('./views/MainView' /* WebpackChunkName: "main-view" */),
);
const LoginView = lazy(() =>
  import('./views/LoginView' /* WebpackChunkName: "login-view" */),
);
const LogoutView = lazy(() =>
  import('./views/LogoutView' /* WebpackChunkName: "logout-view" */),
);
const RegisterView = lazy(() =>
  import('./views/RegisterView' /* WebpackChunkName: "register-view" */),
);
const StatisticView = lazy(() =>
  import('./views/StatisticView' /* WebpackChunkName: "statistics-view" */),
);

// const NotFoundView = lazy(() =>
//   import('./views/NotFoundView' /* WebpackChunkName: "notFound-view" */),
// );


const App = () => {
  const dispatch = useDispatch();

    const isFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrent,
  );

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route
            path="/"
            exact
            element={
<PrivateRoute navigateTo="/login">
                <MainView />
</PrivateRoute>
              }
            />
        <Route
          path="/register"
          element={
            <PublicRoute navigateTo="/login" restricted>
              <RegisterView />
            </PublicRoute>}
            />
          {/* <Route
              path="/register"
              element={<PublicRoute redirectTo="/login" restricted />}
            >
              <Route path="/register" element={<RegisterView />} />
            </Route> */}
        <Route
          path="/login"
          element={
            <PublicRoute navigateTo="/" restricted>
              <LoginView />
            </PublicRoute>}
            />

        

        <Route
          path="/statistics"
          element={
            <PrivateRoute navigateTo="/login">
              <StatisticView />
            </PrivateRoute>}
            />
</Routes>
    </Suspense>
    </>

  );
};

export default App;
{/* <Route
          path="/"
          element={
            <PrivateRoute navigateTo="login">
              <MainView />
            </PrivateRoute>}
            />
        <Route
          path="login"
          element={
            <PublicRoute navigateTo="/" restricted>
              <LoginView />
            </PublicRoute>}
            />

        

        <Route
          path="statistics"
          element={
            <PrivateRoute navigateTo="login">
              <StatisticView />
            </PrivateRoute>}
            /> */}










    // <>
    //   <MainView />
    //   <div>
    //     <Routes>
    //       <Route path="/" exact element={<Header />} />
    //       <Route path="/login" element={<LoginView />} />
    //     </Routes>
    //   </div>
    // </>




    //  !isFetchingCurrentUser && (
    //   <>
    //     <Suspense fallback={<Spinner/>}>
    //       <Routes>
    //         <Route path="/" navigateTo={'login'} element={<PrivateRoute ><MainView /><PrivateRoute />}/>
    //         <PublicRoute path="login" navigateTo={'/'} restricted > <LoginView />
    //     </PublicRoute>

    //     <PublicRoute path="registration" navigateTo={'/'} restricted >
    //       <RegisterView />
    //     </PublicRoute>

    //     <PrivateRoute path="statistics" navigateTo={'login'} element={<StatisticView />} />

    //     {/*
    //     not sure if that should be a separate route or just a modal asking for confirmation
    //     <PrivateRoute path="logout" navigateTo={'login'} >
    //       <LogoutView />
    //     </PrivateRoute> */}
    //   </Routes>
    //     </Suspense>
    //   </>
    // )