import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AdminAuthProvider } from './admin/auth/adminAuth';
import { TenantAuthProvider } from './tenant/auth/tenantAuth';
import { SnackbarProvider } from './utils/snackbarContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <SnackbarProvider>
      <AdminAuthProvider>
        <TenantAuthProvider>
          <App />
        </TenantAuthProvider>
      </AdminAuthProvider>
    </SnackbarProvider>
  </React.StrictMode>
);
