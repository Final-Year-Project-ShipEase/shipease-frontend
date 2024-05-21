import React, { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSnackbar } from '../../utils/snackbarContextProvider';
import CreateAxiosInstance from '../../utils/axiosInstance';
import { useAdminAuth } from './adminAuth';

const AdminProtectedRoute = () => {
  const adminData = JSON.parse(localStorage.getItem('adminData'));
  const { admin, setLoading, setAdmin } = useAdminAuth();
  const { show } = useSnackbar();
  const axios = CreateAxiosInstance();

  useEffect(() => {
    const verifyToken = async () => {
      setLoading(true);

      if (adminData) {
        try {
          await axios.get(`/admin/auth/verify`, {
            headers: {
              Authorization: `Bearer ${adminData.data.token}`,
            },
          });
          setAdmin(true);
          show('Login Success', 'success');
        } catch (error) {
          console.error('Admin verification error:', error);
          setAdmin(false);
          localStorage.removeItem('adminData');
          show('Authentication failed, please log in again', 'error');
        }
      } else {
        setAdmin(false);
      }
      setLoading(false);
    };

    verifyToken();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return admin ? <Outlet /> : <Navigate to="/admin/login" />;
};

export default AdminProtectedRoute;
