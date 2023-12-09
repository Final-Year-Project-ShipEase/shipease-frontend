import React from 'react';
import { Box, Typography } from '@mui/material';
import PageHeader from './pageHeader';

const DriversApproval = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        gap: 2,
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
        <Typography variant="body1">Table</Typography>
      </Box>
    </Box>
  );
};

export default DriversApproval;
