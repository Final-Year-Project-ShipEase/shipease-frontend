// AdminProtectedRoute.js
import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Spinner from '../../utils/spinner';
import { useSnackbar } from '../../utils/snackbarContextProvider';
import CreateAxiosInstance from '../../utils/axiosInstance';

const AdminProtectedRoute = () => {
  const data = localStorage.getItem('adminData');
  const { admin, adminLogin, setLoading, setAdmin, setAdminLogin } =
    UseAdminAuth();
  const { show } = useSnackbar();

  useEffect(() => {
    let isMounted = true;

    const verifyToken = async () => {
      setLoading(true);

      if (data) {
        const token = JSON.parse(localStorage.getItem('adminData')).token;
        try {
          await axios.get(`/admin/auth/verify`, {
            token,
          });
          setAdmin(data);
          setAdminLogin(true);
        } catch (error) {
          console.error(error);
          setAdmin(false);
          localStorage.removeItem('adminData');
          show('Logged out successfully');
        }
      }
      setLoading(false);
    };

    verifyToken();
  }, []);

  if (adminLogin) return <Outlet />;
  else if (!adminLogin && !admin) return <Navigate to="/admin/login" />;
  else return <Navigate to="/error" />;
};

export default AdminProtectedRoute;
