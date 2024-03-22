import { createContext, useContext, useState } from 'react';
import { useSnackbar } from '../../utils/snackbarContextProvider';
import CreateAxiosInstance from '../../utils/axiosInstance';

const AdminAuthContext = createContext();

const AdminAuthProvider = ({ children }) => {
  const { show } = useSnackbar();
  const [loading, setLoading] = useState(false);
  const [admin, setAdmin] = useState(false);
  const axiosInstance = CreateAxiosInstance();

  const login = async (username, password) => {
    try {
      const response = await axiosInstance.post(`/admin/auth/login`, {
        username,
        password,
      });
      localStorage.setItem('adminData', JSON.stringify(response.data));
      show('Logged in successfully', 'success');
      return true;
    } catch (error) {
      if (error.response) {
        const message = error.response.data.message || 'Login failed';
        const status = error.response.status;

        if (status === 401) {
          show('Invalid credentials, please try again.', 'error');
        } else {
          show(message, 'error');
        }
      } else if (error.request) {
        show('No response from server', 'error');
      } else {
        show('Error: ' + error.message, 'error');
      }

      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('adminData');
    setAdmin(false);
    show('Logged out successfully');
  };

  const contextValue = {
    login,
    logout,
    loading,
    admin,
    setLoading,
    setAdmin,
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
