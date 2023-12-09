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
import SignIn from './admin/pages/signin/signin';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SnackbarProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route path="/" element={<ManageTenants />} />
                <Route path="signin" element={<SignIn />} />
                <Route path="dashboard" element={<AdminDashboard />} />
                <Route path="managetenants" element={<ManageTenants />} />
                <Route path="approval/drivers" element={<DriversApproval />} />
                <Route
                  path="approval/vehicles"
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
