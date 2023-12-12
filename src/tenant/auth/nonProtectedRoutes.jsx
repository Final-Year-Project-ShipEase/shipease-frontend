import { Navigate, Outlet } from 'react-router-dom';
import UseTenantAuth from './tenantAuth';

const TenantNonLoginRoute = () => {
  const { admin } = UseTenantAuth();
  return (
    <div>
      {!admin ? (
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
