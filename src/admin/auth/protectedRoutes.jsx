import React, { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import axios from 'axios';
import { useSnackbar } from '../../utils/snackbarContextProvider';
import UseAdminAuth from './adminAuth';

const AdminProtectedRoute = () => {
  const data = localStorage.getItem('adminData');
  const { admin, setLoading, setAdmin } = UseAdminAuth();
  const { show } = useSnackbar();

  useEffect(() => {
    const verifyToken = async () => {
      setLoading(true);
      if (data) {
        const token = JSON.parse(localStorage.getItem('adminData'));
        await axios
          .get(`/admin/auth/protected`, {
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
  }, [setLoading, setAdmin, data, show]);

  useEffect(() => {}, [data]);
  return (
    <div>
      {data ? (
        <>
          <Outlet />
        </>
      ) : (
        <>{data ? <></> : <Navigate to="/admin/login" />}</>
      )}
    </div>
  );
};
export default AdminProtectedRoute;
