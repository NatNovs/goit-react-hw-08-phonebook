import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import ContactsPage from 'pages/ContactsPage';
import Layout from 'components/Layout/Layout';
import PrivateRoute from 'guards/PrivateRoute';
import PublicRoute from 'guards/PublicRoute';
import { useDispatch } from 'react-redux';
import { refreshThunk } from 'store/auth/thunks';
import { Heading } from '@chakra-ui/react';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="/register"
            element={
              <PublicRoute>
                <RegisterPage />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="*"
            element={
              <Heading as="h1" size="3xl" textAlign="center" mt="100px">
                404 not found!
              </Heading>
            }
          ></Route>
        </Route>
      </Routes>
    </>
  );
};