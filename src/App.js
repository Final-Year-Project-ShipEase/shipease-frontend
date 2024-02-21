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
import PoolRequest from './tenant/pages/poolRequest/poolRequest'

const App = () => {
  const { loading } = UseAdminAuth();
  return (
    <>
      <SnackbarProvider>
        <Router>
          <Routes>
            <Route path="/error" element={<ErrorPage />} />
            <Route element={<TenantNonLoginRoute />}>
              <Route path="login" element={<TenantSignInPage />} />
              <Route path="signup" element={<TenantSignUpPage />} />
            </Route>

            <Route element={<TenantProtectedRoute />}>
              <Route
                path="*"
                element={
                  <>
                    <Routes>
                      <Route element={<TenantLayout />}>
                        <Route path="/" element={<TenantDashboard />} />
                        <Route path="dashboard" element={<TenantDashboard />} />
                        <Route
                          path="booking"
                          element={<Booking/>}
                        />
                        <Route
                          path="driversgarage"
                          element={<DriversGarage />}
                        />
                        <Route
                          path="vehiclesgarage"
                          element={<VehiclesGarage />}
                        />
                        <Route path="addDriver" element={<CreateDriver />} />
                        <Route path="addVehicle" element={<CreateVehicle />} />
                        <Route
                          path="poolRequest"
                          element={<PoolRequest />}
                        />
                      </Route>
                      <Route path="*" element={<ErrorPage />}></Route>
                    </Routes>
                  </>
                }
              />
            </Route>
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
                      </Route>
                      <Route path="*" element={<ErrorPage />}></Route>
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
