import React, { useState } from 'react';
import { Box } from '@mui/material';
import PageHeader from './pageHeader';
import TableData from './components/table/table';
import { VehicleColumns, dummyVehicleData } from './_columns.js';

const VehicleApproval = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        p: 2,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          height: '7%',
        }}
      >
        <PageHeader />
      </Box>
      <Box sx={{ mt: 2 }}>
        <TableData columns={VehicleColumns} rows={dummyVehicleData} />
      </Box>
    </Box>
  );
};

export default VehicleApproval;
