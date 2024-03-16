import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme';
import { AdminAuthProvider } from './admin/auth/adminAuth';
import { TenantAuthProvider } from './tenant/auth/tenantAuth';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AdminAuthProvider>
        <TenantAuthProvider>
          <App />
        </TenantAuthProvider>
      </AdminAuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
