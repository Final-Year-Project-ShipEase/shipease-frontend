import { useEffect, useState } from 'react';
import { useSnackbar } from '../../utils/snackbarContextProvider';
import CreateAxiosInstance from '../../utils/axiosNonProtectedInstance';

const UseTenantAuth = () => {
  const { show } = useSnackbar();
  const [loading, setLoading] = useState(false);
  const [tenant, setTenant] = useState(false);

  const axiosInstance = CreateAxiosInstance();

  const refreshToken = async () => {
    const tenantData = localStorage.getItem('tenantData');
    console.log(tenantData);
    try {
      const response = await axiosInstance.post(`/tenant/auth/refresh`, {
        refreshToken: tenantData.refreshToken,
      });

      const { accessToken } = response.data;
      tenantData.token = accessToken;
      localStorage.setItem('tenantData', JSON.stringify(tenantData));
      return true;
    } catch (error) {
      show('Session expired. Please login again', 'error');
      return false;
    }
  };

  const tokenValidation = async (username, password) => {
    setLoading(true);
    try {
      const response = await axiosInstance.post(`/tenant/auth/login`, {
        username,
        password,
      });

      if (response.status === 200) {
        const { tenant } = response.data;
        localStorage.setItem('tenantData', JSON.stringify(tenant));
        setTenant(tenant);
        return true;
      }
    } catch (error) {
      localStorage.removeItem('tenantData');
      show('Invalid credentials', 'error');
      return false;
    } finally {
      setLoading(false);
    }
  };

  const login = async (username, password) => {
    const response = await axiosInstance.post(`/tenantlogin`, {
      username,
      password,
    });
    try {
      const data = response.data;
      show('Logged in successfully');
      //scheduleTokenRefresh();
      return data;
    } catch (error) {
      show('Invalid credentials', 'error');
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('tenantData');
    setTenant(false);
    show('Logged out successfully');
  };

  const scheduleTokenRefresh = () => {
    const refreshInterval = 2 * 55 * 1000;
    setInterval(() => {
      refreshToken();
    }, refreshInterval);
  };

  // useEffect(() => {
  //   scheduleTokenRefresh();
  // }, []);

  return {
    tokenValidation,
    logout,
    refreshToken,
    loading,
    tenant,
    setLoading,
    setTenant,
    login,
  };
};

export default UseTenantAuth;
