// TenantProtectedRoute.js
import React, { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSnackbar } from '../../utils/snackbarContextProvider';
import { useTenantAuth } from './tenantAuth';
import CreateAxiosInstance from '../../utils/axiosInstance';

const TenantProtectedRoute = () => {
  const data = JSON.parse(localStorage.getItem('tenantData'));
  const { tenant, setLoading, setTenant } = useTenantAuth();
  const { show } = useSnackbar();
  const axios = CreateAxiosInstance();

  useEffect(() => {
    const verifyToken = async () => {
      setLoading(true);

      if (data) {
        try {
          const response = await axios.get(`/tenant/auth/verify`, {
            headers: {
              Authorization: `Bearer ${data?.data?.token}`,
            },
          });
          setTenant(response.data);
          show('Login Success', 'success');
        } catch (error) {
          setTenant(false);
          localStorage.removeItem('tenantData');
          show(error.message, 'error');
        }
      }
    };

    verifyToken();
  }, []);

  if (!tenant) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default TenantProtectedRoute;
