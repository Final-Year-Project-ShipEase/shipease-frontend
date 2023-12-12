import { Navigate, Outlet } from 'react-router-dom';
import { useAdminAuth } from './adminAuth';

const AdminNonLoginRoute = () => {
  const { admin } = useAdminAuth();
  return (
    <div>
      {!admin ? (
        <>
          <Outlet />
        </>
      ) : (
        <Navigate to="/admin/login" />
      )}
    </div>
  );
};

export default AdminNonLoginRoute;
