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
    verifyToken();
  }, [setLoading, setAdmin, data, show]);

  const admin1 = true;
  return (
    <div>
      {admin1 ? (
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
