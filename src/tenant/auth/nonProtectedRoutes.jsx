import { Navigate, Outlet } from 'react-router-dom';
import UseTenantAuth from './tenantAuth';

const TenantNonLoginRoute = () => {
  const { tenant } = UseTenantAuth();
  return (
    <div>
      {!tenant ? (
        <>
          <Outlet />
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </div>
  );
};

export default TenantNonLoginRoute;
