import { useState } from 'react';
import CreateAxiosInstance from '../../utils/axiosInstance';
import { useSnackbar } from '../../utils/snackbarContextProvider';

const UseAdminAuth = () => {
  const { show } = useSnackbar();
  const [loading, setLoading] = useState(false);
  const [admin, setAdmin] = useState(false);

  const loginWithToken = async (username, password) => {
    setLoading(true);
    const axiosInstance = CreateAxiosInstance();
    await axiosInstance
      .post(`/admin/auth/login`, {
        username,
        password,
      })
      .then((response) => {
        const data = response;
        console.log(data);
        localStorage.setItem('adminData', JSON.stringify(data));
        setAdmin(data);
        show('Logged in successfully');
      })
      .catch((error) => {
        console.error(error);
        show('Invalid credentials', 'error');
      });
    setLoading(false);
  };

  const login = async (username, password) => {
    setLoading(true);
    const axiosInstance = CreateAxiosInstance();

    try {
      const response = await axiosInstance.post(`/adminlogin`, {
        username,
        password,
      });

      const data = response.data;
      localStorage.setItem('adminData', JSON.stringify(data));
      setAdmin(true);
      show('Logged in successfully');
    } catch (error) {
      console.error(error);
      show('Invalid credentials', 'error');
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('adminData');
    setAdmin(false);
    show('Logged out successfully');
  };

  return { login, logout, loading, admin, setLoading, setAdmin };
};

export default UseAdminAuth;
