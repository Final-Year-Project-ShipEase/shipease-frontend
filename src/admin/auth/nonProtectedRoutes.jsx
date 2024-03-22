import { Navigate, Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useAdminAuth } from './adminAuth';

const AdminNonLoginRoute = () => {
  const { admin } = useAdminAuth();

  if (admin) {
    return <Navigate to="/admin/dashboard" />;
  }
  return <Outlet />;
};

export default AdminNonLoginRoute;
