import React from 'react';
import { Box, Grid, useTheme } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/navbar/navbar';
import Sidebar from '../../components/sidebar/sidebar';

const TenantLayout = () => {
  const theme = useTheme();
  const leftSpan = 1.5;
  const rigthSpan = 12 - leftSpan;
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
        }}
      >
        <Grid container>
          <Grid
            item
            md={leftSpan}
            xs={leftSpan}
            lg={leftSpan}
            sx={{ backgroundColor: '#FAFAFA' }}
          >
            <Sidebar leftSpan={leftSpan} />
          </Grid>
          <Grid
            item
            md={rigthSpan}
            sx={{
              backgroundColor: theme.palette.page.main,
              minHeight: '93vh',
              paddingLeft: '1rem',
            }}
          >
            <Outlet context={[rigthSpan, leftSpan]} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default TenantLayout;