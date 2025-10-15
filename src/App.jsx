import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { fetchNotifications } from './thunks/notificationThunks';
import { checkAuthStatus } from './thunks/authThunks';

import Header from './components/header';
import Home from './components/home.jsx';
import Login from './components/login.jsx';
import Register from './components/register.jsx';

function App() {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);

  useEffect(() => {
    const unsubscribe = dispatch(checkAuthStatus());
    if (user) {
      dispatch(fetchNotifications());
    }
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={user ? <Navigate to="/home" /> : <Navigate to="/register" />} />
        <Route path="/home" element={user ? <Home /> : <Navigate to="/register" />} />
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/home" />} />
        <Route path="/register" element={!user ? <Register /> : <Navigate to="/home" />} />
      </Routes>
    </>
  );
}

export default App;
