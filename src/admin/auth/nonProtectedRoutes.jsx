import { Navigate, Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useAdminAuth } from './adminAuth';

const AdminNonLoginRoute = () => {
  const { adminLogin } = useAdminAuth();

  useEffect(() => {}, [adminLogin]);

  if (adminLogin) {
    return <Navigate to="/admin/dashboard" />;
  }
  return <Outlet />;
};

export default AdminNonLoginRoute;
