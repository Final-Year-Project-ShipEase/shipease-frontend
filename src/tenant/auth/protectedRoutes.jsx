// TenantProtectedRoute.js
import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import UseTenantAuth from './tenantAuth';
import Spinner from '../../utils/spinner';
import axios from 'axios';
import { useSnackbar } from '../../utils/snackbarContextProvider';

const TenantProtectedRoute = () => {
  const data = JSON.parse(localStorage.getItem('tenantData'));
  const { tenant, setLoading, setTenant, loading } = UseTenantAuth();
  const { show } = useSnackbar();

  useEffect(() => {
    let isMounted = true;

    const verifyToken = async () => {
      setLoading(true);

      if (data) {
        const token = JSON.parse(localStorage.getItem('tenantData')).token;

        try {
          const response = await axios.get(
            `${process.env.REACT_APP_BACKEND_URL}/tenant/auth/verify`,
            { headers: { Authorization: `Bearer ${token}` } }
          );

          setTenant(data);
          show('Logged in successfully');
        } catch (error) {
          console.error(error);

          if (isMounted) {
            setTenant(false);
            localStorage.removeItem('userdata');
            show('Logged out successfully');
          }
        }
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
      {tenant ? (
        <>
          <Outlet />
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </div>
  );
};

export default TenantProtectedRoute;
