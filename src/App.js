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
import TenantLayout from './tenant/pages/layout/layout';
import ErrorPage from './utils/errorPage404';
import AdminNonLoginRoute from './admin/auth/nonProtectedRoutes';
import AdminProtectedRoute from './admin/auth/protectedRoutes';
import SignInPage from './admin/pages/signin/signin';

const App = () => {
  return (
    <>
      <SnackbarProvider>
        <Router>
          <Routes>
            <Route path="/error" element={<ErrorPage />} />
            <Route element={<AdminNonLoginRoute />}>
              <Route path="admin/login" element={<SignInPage />} />
            </Route>

            <Route element={<AdminProtectedRoute />}>
              <Route
                path="admin/*"
                element={
                  <>
                    <Routes>
                      <Route element={<Layout />}>
                        <Route path="/" element={<AdminDashboard />} />
                        <Route path="dashboard" element={<AdminDashboard />} />
                        <Route
                          path="managetenants"
                          element={<ManageTenantList />}
                        />
                        <Route
                          path="managetenants/:id"
                          element={<ManageTenants />}
                        />
                        <Route
                          path="driversapproval"
                          element={<DriversApproval />}
                        />
                        <Route
                          path="vehiclesapproval"
                          element={<VehiclesApproval />}
                        />
                        <Route path="permissions" element={<Permissions />} />
                        {/* <Route
                          path="announcements"
                          element={<Announcements />}
                        /> */}
                        <Route
                          path="tenantDashboard"
                          element={<TenantDashboard />}
                        />
                        <Route path="*" element={<ErrorPage />}></Route>
                        <Route path="*" element={<ErrorPage />}></Route>
                      </Route>
                    </Routes>
                  </>
                }
              />

            </Route>
          </Routes>
        </Router>
      </SnackbarProvider>
    </>
  );
};

export default App;
