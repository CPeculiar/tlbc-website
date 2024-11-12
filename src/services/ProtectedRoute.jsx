// services/ProtectedRoute.jsx
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './AuthContext';

function ProtectedRoute({ element }) {
  const { currentUser, isLoggedIn } = useAuth();
  const location = useLocation();

   // If there's no user logged in or the user is logged out, redirect to login page
   if (!currentUser || !isLoggedIn) {
    // Save the attempted location so we can redirect back after login
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If user is logged in, render the protected component
  return element;
}

export default ProtectedRoute;