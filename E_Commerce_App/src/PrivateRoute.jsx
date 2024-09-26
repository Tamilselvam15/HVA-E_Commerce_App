import { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const isAuthenticated = sessionStorage.getItem('auth') === 'true';
  const expiryTime = sessionStorage.getItem('expiryTime');

  useEffect(() => {
    if (expiryTime && Date.now() > parseInt(expiryTime, 10)) {
      sessionStorage.setItem('auth', 'false'); 
      sessionStorage.removeItem('loginTime'); 
      sessionStorage.removeItem('expiryTime'); 
      alert('Your session has expired. Please log in again.'); 
    }
  }, [expiryTime]);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default PrivateRoute;
