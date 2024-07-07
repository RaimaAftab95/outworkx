import { useAuthContext } from '../hooks/useAuthContext';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

export default function ProtectedRoutes() {
  const { user } = useAuthContext();
  const location = useLocation();

  if (user === null) {
    return <Navigate to={`/login?redirect=${location.pathname}`} />;
  }

  return <Outlet />;
}
