// TenantProtectedRoute.js
import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSnackbar } from '../../utils/snackbarContextProvider';
import UseTenantAuth from './tenantAuth';
import CreateAxiosInstance from '../../utils/axiosInstance';

const TenantProtectedRoute = () => {
  const data = JSON.parse(localStorage.getItem('tenantData'));
  const { tenant, setLoading, setTenant, loading } = useTenantAuth();
  const { show } = useSnackbar();
  const axios = CreateAxiosInstance();

  useEffect(() => {
    let isMounted = true;

    const verifyToken = async () => {
      setLoading(true);

      if (data) {
        const token = JSON.parse(localStorage.getItem('tenantData')).token;
        await axios
          .get(`/tenant/auth/verify`, {
            data: {
              token: token,
            },
          })
          .then((res) => {
            setTenant(data);
            show('Welcome back', 'success');
          })
          .catch((error) => {
            setTenant(false);
            localStorage.removeItem('adminData');
            show(error.message, 'error');
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
    verifyToken();
  }, [data]);

  if (!tenant) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default TenantProtectedRoute;
