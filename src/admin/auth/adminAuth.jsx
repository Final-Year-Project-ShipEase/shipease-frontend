import { createContext, useContext, useState } from 'react';
import { useSnackbar } from '../../utils/snackbarContextProvider';
import CreateAxiosInstance from '../../utils/axiosNonProtectedInstance';

const AdminAuthContext = createContext();

const AdminAuthProvider = ({ children }) => {
  const { show } = useSnackbar();
  const [loading, setLoading] = useState(false);
  const [admin, setadmin] = useState(false);

  const axiosInstance = CreateAxiosInstance();

  const refreshToken = async () => {
    const adminData = localStorage.getItem('adminData');
    console.log(adminData);
    try {
      const response = await axiosInstance.post(`/admin/auth/refresh`, {
        refreshToken: adminData.refreshToken,
      });

      const { accessToken } = response.data;
      adminData.token = accessToken;
      localStorage.setItem('adminData', JSON.stringify(adminData));
      return true;
    } catch (error) {
      show('Session expired. Please login again', 'error');
      return false;
    }
  };

  const tokenValidation = async (username, password) => {
    setLoading(true);
    try {
      const response = await axiosInstance.post(`/admin/auth/login`, {
        username,
        password,
      });

      if (response.status === 200) {
        const { admin } = response.data;
        localStorage.setItem('adminData', JSON.stringify(admin));
        show('Logged in successfully', 'success');
        return true;
      }
    } catch (error) {
      localStorage.removeItem('adminData');
      show('Invalid credentials', 'error');
      return false;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('adminData');
    setadmin(false);
    show('Logged out successfully', 'success');
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

  const contextValue = {
    tokenValidation,
    logout,
    refreshToken,
    loading,
    admin,
    setLoading,
    setadmin,
  };

  return (
    <AdminAuthContext.Provider value={contextValue}>
      {children}
    </AdminAuthContext.Provider>
  );
};

const useAdminAuth = () => {
  const context = useContext(AdminAuthContext);
  if (context === undefined) {
    throw new Error('useadminAuth must be used within a adminAuthProvider');
  }
  return context;
};

export { AdminAuthProvider, useAdminAuth };
