import React from 'react';
import { useSnackbar } from '../../commons/snackBarContextProvider';
import CreateAxiosInstance from '../../utils/axiosInstance';

const AdminAuth = () => {
  const { show } = useSnackbar();
  const [loading, setLoading] = React.useState(false);
  const [admin, setAdmin] = React.useState(false);

  const login = async (email, password) => {
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
        setAdmin(data);
        show('Logged in successfully');
      })
      .catch((error) => {
        console.error(error);
        show('Invalid credentials');
      });
    setLoading(false);
  };

  const logout = () => {
    localStorage.removeItem('adminData');
    setAdmin(false);
    show('Logged out successfully');
  };

  return { login, logout, loading, admin, setLoading, setAdmin };
};
