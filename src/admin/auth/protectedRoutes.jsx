// AdminProtectedRoute.js
import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Spinner from '../../utils/spinner';
import axios from 'axios';
import { useSnackbar } from '../../utils/snackbarContextProvider';
import { useAdminAuth } from './adminAuth';

const AdminProtectedRoute = () => {
  const data = JSON.parse(localStorage.getItem('adminData'));
  const { admin, setLoading, setadmin, loading } = useAdminAuth();
  const { show } = useSnackbar();

  useEffect(() => {
    let isMounted = true;

    const verifyToken = async () => {
      setLoading(true);

      if (data) {
        const token = JSON.parse(localStorage.getItem('adminData')).token;

        await axios
          .get(`${process.env.REACT_APP_BACKEND_URL}/admin/auth/verify`, {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then((res) => {
            setadmin(data);
            show('Logged in successfully', 'success');
          })
          .catch((err) => {
            console.error(err);
            setadmin(false);
            localStorage.removeItem('adminData');
            show('Logged out successfully');
          });
      }

      if (isMounted) {
        setLoading(false);
      }
    };

    verifyToken();
    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      {admin ? (
        <>
          <Outlet />
        </>
      ) : (
        <Navigate to="/admin/login" />
      )}
    </div>
  );
};

export default AdminProtectedRoute;
