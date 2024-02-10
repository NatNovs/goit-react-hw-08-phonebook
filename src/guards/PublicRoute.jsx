import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectUser } from 'store/auth/selectors';

const PublicRoute = ({ children }) => {
  const user = useSelector(selectUser);

  if (!user) {
    return children;
  } else {
    return <Navigate to={'/contacts'} />;
  }
};

export default PublicRoute;