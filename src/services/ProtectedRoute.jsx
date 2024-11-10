import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

function ProtectedRoute({ element }) {
  const { currentUser } = useAuth();

  if (!currentUser) {
    // Redirect to login page if not authenticated
    return <Navigate to="/login" replace />;
  }

  return element;
}

export default ProtectedRoute;
