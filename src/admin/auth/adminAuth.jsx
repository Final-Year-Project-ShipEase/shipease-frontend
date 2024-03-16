import { createContext, useContext, useState } from 'react';
import { useSnackbar } from '../../utils/snackbarContextProvider';
import CreateAxiosInstance from '../../utils/axiosNonProtectedInstance';

const AdminAuthContext = createContext();

const AdminAuthProvider = ({ children }) => {
  const { show } = useSnackbar();
  const [loading, setLoading] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [adminLogin, setAdminLogin] = useState(false);

  const login = async (username, password) => {
    const axiosInstance = CreateAxiosInstance();
    await axiosInstance
      .post(`/admin/auth/login`, {
        username,
        password,
      })
      .then((response) => {
        if (response.status !== 200) {
          show('Invalid credentials', 'error');
        }
        const data = response;
        localStorage.setItem('adminData', JSON.stringify(data));
      })
      .catch((error) => {
        show(error.message, 'error');
        return false;
      });

    return true;
  };

  const logout = () => {
    localStorage.removeItem('adminData');
    setAdmin(false);
    setAdminLogin(false);
    show('Logged out successfully');
  };

  return {
    login,
    logout,
    loading,
    admin,
    setLoading,
    setAdmin,
    adminLogin,
    setAdminLogin,
  };
};

const useAdminAuth = () => {
  const context = useContext(AdminAuthContext);
  if (context === undefined) {
    throw new Error('useadminAuth must be used within a adminAuthProvider');
  }
  return context;
};

export { AdminAuthProvider, useAdminAuth };
