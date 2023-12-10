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
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import theme from './theme';
import SignIn from './admin/pages/signin/signin';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SnackbarProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route path="/" element={<SignIn />} />
                <Route path="dashboard" element={<AdminDashboard />} />
                <Route path="managetenants" element={<ManageTenants />} />
                <Route path="driversapproval" element={<DriversApproval />} />
                <Route
                  path="vehiclesapproval"
                  element={<VehiclesApproval />}
                />
                <Route path="permissions" element={<Permissions />} />
                <Route path="announcements" element={<Announcements />} />
              </Route>
            </Routes>
          </Router>
        </SnackbarProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
