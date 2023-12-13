import { useState } from 'react';
import CreateAxiosInstance from '../../utils/axiosInstance';
import { useSnackbar } from '../../utils/snackbarContextProvider';

const UseTenantAuth = () => {
  const { show } = useSnackbar();
  const [loading, setLoading] = useState(false);
  const [tenant, setTenant] = useState(false);

  const loginWithToken = async (email, password) => {
    setLoading(true);
    const axiosInstance = CreateAxiosInstance();
    await axiosInstance
      .post(`/admin/login`, {
        email,
        password,
      })
      .then((response) => {
        const data = response.data;
        localStorage.setItem('adminData', JSON.stringify(data));
        setTenant(data);
        show('Logged in successfully');
      })
      .catch((error) => {
        console.error(error);
        show('Invalid credentials');
      });
    setLoading(false);
  };

  const login = async (username, password) => {
    setLoading(true);
    const axiosInstance = CreateAxiosInstance();

    try {
      const response = await axiosInstance.post(`tenantlogin`, {
        username,
        password,
      });

      const data = response.data;
      localStorage.setItem('tenantData', JSON.stringify(data));
      setTenant(data);
      show('Logged in successfully');
    } catch (error) {
      console.error(error);
      show('Invalid credentials', 'error');
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('tenantData');
    setTenant(false);
    show('Logged out successfully');
  };

  return {
    login,
    logout,
    loading,
    tenant,
    setLoading,
    setTenant,
  };
};

export default UseTenantAuth;
