import React from 'react';
import { Box } from '@mui/material';
import TenantDetails from './recentBookingComponent/tenantDetails';
import TabComponent from './tabComponent';
import { useParams } from 'react-router-dom';

const ManageTenants = () => {
  const { id } = useParams();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        padding: 2,
      }}
    >
      <Box
        sx={{
          marginBottom: '-10px',
          width: '100%',
          borderRadius: '10px',
          boxShadow: '0px 2px 14px rgba(0, 0, 0, 1)',
        }}
      >
        <TenantDetails tenantId={id} />
      </Box>

      <Box sx={{ mt: '30px', borderTop: '1px dashed black'}}>
        <TabComponent />
      </Box>
    </Box>
  );
};

export default ManageTenants;
