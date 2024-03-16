import { createContext, useContext, useState } from 'react';
import { useSnackbar } from '../../utils/snackbarContextProvider';
import CreateAxiosInstance from '../../utils/axiosNonProtectedInstance';

const TenantAuthContext = createContext();

const TenantAuthProvider = ({ children }) => {
  const { show } = useSnackbar();
  const [loading, setLoading] = useState(false);
  const [tenant, setTenant] = useState(false);

  const login = async (username, password) => {
    setLoading(true);
    const axiosInstance = CreateAxiosInstance();
    await axiosInstance
      .post(`/tenant/auth/login`, {
        username,
        password,
      })
      .then((response) => {
        if (response.status !== 200) {
          show(response.data.message, 'error');
          return;
        }

        localStorage.setItem('tenantData', JSON.stringify(response.data));
        setTenant(response.data);
      })
      .catch((error) => {
        show(error.message, 'error');
      });

    setLoading(false);
  };

  const logout = () => {
    localStorage.removeItem('tenantData');
    setTenant(false);
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

  const s = {
    logout,
    setLoading,
    setTenant,
    login,
  };

  return (
    <TenantAuthContext.Provider value={contextValue}>
      {children}
    </TenantAuthContext.Provider>
  );
};

const useTenantAuth = () => {
  const context = useContext(TenantAuthContext);
  if (context === undefined) {
    throw new Error('useTenantAuth must be used within a TenantAuthProvider');
  }
  return context;
};

export { TenantAuthProvider, useTenantAuth };
