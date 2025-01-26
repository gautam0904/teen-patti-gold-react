import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/auth.contexts';

export const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  return children;
};
