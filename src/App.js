import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './admin/pages/layout/layout';
import ManageTenants from './admin/pages/manageTenants/manageTenants';
import DriversApproval from './admin/pages/driversApproval/driversApproval';
import VehiclesApproval from './admin/pages/vehiclesApproval/vehiclesApproval';
import Permissions from './admin/pages/permissions/permissions';
import Announcements from './admin/pages/announcements/announcements';
import AdminDashboard from './admin/pages/dashboard/dashboard';
import { SnackbarProvider } from './utils/snackbarContextProvider';
import ManageTenantList from './admin/pages/manageTenantList/manageTenant';
import TenantDashboard from './tenant/pages/tenantDashboard/tenantDashboard';

const App = () => {
  return (
    <>
      <SnackbarProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<AdminDashboard />} />
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="managetenants" element={<ManageTenantList />} />
              <Route path="managetenants/:id" element={<ManageTenants />} />
              <Route path="approval/drivers" element={<DriversApproval />} />
              <Route path="approval/vehicles" element={<VehiclesApproval />} />
              <Route path="permissions" element={<Permissions />} />
              <Route path="announcements" element={<Announcements />} />
              <Route path="tenantDashboard" element={<TenantDashboard />} />
            </Route>
          </Routes>
        </Router>
      </SnackbarProvider>
    </>
  );
};

export default App;
