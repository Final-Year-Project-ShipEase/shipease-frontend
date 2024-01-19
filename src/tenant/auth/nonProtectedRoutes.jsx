import { Navigate, Outlet } from 'react-router-dom';

const TenantNonLoginRoute = () => {
  const tenant = JSON.parse(localStorage.getItem('tenantData'));
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
