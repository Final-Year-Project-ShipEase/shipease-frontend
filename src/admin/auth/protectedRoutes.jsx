import React, { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import UseAdminAuth from './adminAuth';
import axios from 'axios';
import { useSnackbar } from '../../utils/snackbarContextProvider';
const AdminProtectedRoute = () => {
  const data = localStorage.getItem('adminData');
  const { admin, setLoading, setAdmin } = UseAdminAuth();
  const { show } = useSnackbar();

  useEffect(() => {
    const verifyToken = async () => {
      setLoading(true);
      if (data) {
        const token = JSON.parse(localStorage.getItem('adminData')).token;
        await axios
          .get(`/token/verify`, {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then(() => {
            setAdmin(data);
          })
          .catch((error) => {
            console.error(error);
            setAdmin(false);
            localStorage.removeItem('adminData');
            show('Logged out successfully');
          });
      }
      setLoading(false);
    };
  }, []);

  if (!data) {
    // Redirect to login if adminData is not present in localStorage
    return <Navigate to="/admin/login" />;
  }

  // Render children components (Outlet) if adminData is present
  return <Outlet />;
};

export default AdminProtectedRoute;
