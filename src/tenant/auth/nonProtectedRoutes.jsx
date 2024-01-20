import { Navigate, Outlet } from 'react-router-dom';
import { useTenantAuth } from './tenantAuth';

const TenantNonLoginRoute = () => {
  const { tenant } = useTenantAuth();
  return (
    <div>
      {!tenant ? (
        <>
          <Outlet />
        </>
      ) : (
        <Navigate to="/" />
      )}
    </div>
  );
};

export default TenantNonLoginRoute;
