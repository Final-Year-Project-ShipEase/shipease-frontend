import { Navigate, Outlet } from 'react-router-dom';
import { useTenantAuth } from './tenantAuth';

const TenantNonLoginRoute = () => {
  const { tenant } = useTenantAuth();

  console.log('tenant', tenant);
  if (tenant) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default TenantNonLoginRoute;
