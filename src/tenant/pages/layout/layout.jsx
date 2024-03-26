import React from 'react';
import { Box, Grid, useTheme } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/navbar/navbar';
import Sidebar from '../../components/sidebar/sidebar';

const TenantLayout = () => {
  const theme = useTheme();

  const leftSpanMd = 1;
  const leftSpanSm = 3;
  const rightSpanMd = 8;
  const rightSpanSm = 9; 

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Box
        sx={{
          backgroundColor: theme.palette.page.main,
          minHeight: '7vh',
        }}
      >
        <Navbar />
      </Box>
      <Box
        sx={{
          backgroundColor: theme.palette.page.main,
          minHeight: '93vh',
          flexGrow: 1,
        }}
      >
        <Grid
          container
          sx={{
            display: 'flex',
            flexDirection: 'Column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
          }}
        >
          <Grid
            item
            lg={leftSpanMd}
            md={leftSpanMd}
            sm={leftSpanSm}
            xs={12}
            sx={{ backgroundColor: '#FAFAFA' }}
          >
            <Sidebar />
          </Grid>
          <Grid
            item
            lg={rightSpanMd}
            md={rightSpanMd}
            sm={rightSpanSm}
            xs={12}
            sx={{
              backgroundColor: theme.palette.page.main,
              minHeight: '93vh',
            }}
          >
            <Outlet />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default TenantLayout;
