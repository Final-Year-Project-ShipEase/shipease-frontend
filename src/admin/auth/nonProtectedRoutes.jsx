import { Navigate, Outlet } from 'react-router-dom';
import UseAdminAuth from './adminAuth';
import { useEffect } from 'react';

const AdminNonLoginRoute = () => {
  const { adminLogin } = UseAdminAuth();

  useEffect(() => {}, [adminLogin]);

  if (adminLogin) {
    return <Navigate to="/admin/dashboard" />;
  }
  return <Outlet />;
};

export default AdminNonLoginRoute;
