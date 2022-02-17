import React from 'react';
import MainView from './views/MainView/MainView';
import NotFoundView from './views/NotFoundView/NotFoundView';
import { Routes, Route } from "react-router-dom";
import LoginView from "./views/LoginView";
import Header from "./components/HeaderNav/HeaderNav";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { authOperations } from "./redux/auth";

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
  );
};

export default App;
