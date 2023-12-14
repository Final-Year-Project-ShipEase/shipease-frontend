import React from 'react';
import { Box } from '@mui/material';
import PageHeader from './pageHeader';
import CustomTable from './components/table/table';

const Permissions = () => {
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
          alignItems: 'center',
          width: '100%',
          height: '7%',
        }}
      >
        <PageHeader />
      </Box>
      <Box sx={{ mt: 2 }}>
        <CustomTable />
      </Box>
    </Box>
  );
};

export default Permissions;
