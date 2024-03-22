import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './admin/pages/layout/layout';
import ManageTenants from './admin/pages/manageTenants/manageTenants';
import DriversApproval from './admin/pages/driversApproval/driversApproval';
import VehiclesApproval from './admin/pages/vehiclesApproval/vehiclesApproval';
import Permissions from './admin/pages/permissions/permissions';
import AdminDashboard from './admin/pages/dashboard/dashboard';
import ManageTenantList from './admin/pages/manageTenantList/manageTenant';
import TenantDashboard from './tenant/pages/tenantDashboard/tenantDashboard';
import TenantLayout from './tenant/pages/layout/layout';
import ErrorPage from './utils/errorPage404';
import AdminNonLoginRoute from './admin/auth/nonProtectedRoutes';
import AdminProtectedRoute from './admin/auth/protectedRoutes';
import SignInPage from './admin/pages/signin/signin';
import TenantProtectedRoute from './tenant/auth/protectedRoutes';
import TenantNonLoginRoute from './tenant/auth/nonProtectedRoutes';
import TenantSignInPage from './tenant/pages/signin/signin';
import TenantSignUpPage from './tenant/pages/signUp/signUp';
import DriversGarage from './tenant/pages/driversGarage/driversGarage';
import VehiclesGarage from './tenant/pages/vehiclesGarage/vehiclesGarage';
import CreateDriver from './tenant/pages/createDriver/createDriver';
import CreateVehicle from './tenant/pages/createVehicle/createVehicle';
import UseAdminAuth from './admin/auth/adminAuth';
import Booking from './tenant/pages/booking/booking';
import BookingDetail from './tenant/pages/booking/components/bookingCard/bookingDetailModal';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Tenant Routes */}
        <Route element={<TenantNonLoginRoute />}>
          <Route path="login" element={<TenantSignInPage />} />
          <Route path="signup" element={<TenantSignUpPage />} />
        </Route>

        <Route element={<TenantProtectedRoute />}>
          <Route element={<TenantLayout />}>
            <Route path="/" element={<TenantDashboard />} />
            <Route path="dashboard" element={<TenantDashboard />} />
            <Route path="driversgarage" element={<DriversGarage />} />
            <Route path="vehiclesgarage" element={<VehiclesGarage />} />
            <Route path="addDriver" element={<CreateDriver />} />
            <Route path="addVehicle" element={<CreateVehicle />} />
          </Route>
        </Route>

        {/* Admin Routes */}
        <Route element={<AdminNonLoginRoute />}>
          <Route path="admin/login" element={<SignInPage />} />
        </Route>

        <Route path="/admin" element={<AdminProtectedRoute />}>
          <Route element={<Layout />}>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="managetenants" element={<ManageTenantList />} />
            <Route path="managetenants/:id" element={<ManageTenants />} />
            <Route path="driversapproval" element={<DriversApproval />} />
            <Route path="vehiclesapproval" element={<VehiclesApproval />} />
            <Route path="permissions" element={<Permissions />} />
          </Route>
        </Route>

        {/* Error Handling */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
