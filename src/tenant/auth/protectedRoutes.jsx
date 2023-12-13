import React, { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import axios from 'axios';
import { useSnackbar } from '../../utils/snackbarContextProvider';
import UseTenantAuth from './tenantAuth';

const TenantProtectedRoute = () => {
  const data = localStorage.getItem('tenantData');
  const { admin, setLoading, setAdmin } = UseTenantAuth();
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

  return (
    <div>
      {data ? (
        <>
          <Outlet />
        </>
      ) : (
        <>{data ? <></> : <Navigate to="/login" />}</>
      )}
    </div>
  );
};
export default TenantProtectedRoute;
