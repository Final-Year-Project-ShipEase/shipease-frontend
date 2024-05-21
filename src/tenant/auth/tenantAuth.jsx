import { createContext, useContext, useState } from 'react';
import CreateAxiosInstance from '../../utils/axiosInstance';
import { useSnackbar } from '../../utils/snackbarContextProvider';
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
          show('Invalid Credentials', 'error');
          return;
        }
        localStorage.setItem('tenantData', JSON.stringify(response.data));
      })
      .catch((error) => {
        console.error(error);
        show('something went wrong', 'error');
      });

    setLoading(false);
    return true;
  };

  const logout = () => {
    localStorage.removeItem('tenantData');
    setTenant(false);
    show('Logged out successfully', 'success');
  };

  const contextValue = {
    logout,
    setLoading,
    setTenant,
    tenant,
    login,
    loading,
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
