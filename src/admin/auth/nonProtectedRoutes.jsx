import { Navigate, Outlet } from 'react-router-dom';
import UseAdminAuth from './adminAuth';

const AdminNonLoginRoute = () => {
  const { admin } = UseAdminAuth();
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
