import React from 'react';
import { Box, Grid, useTheme } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/navbar/navbar';
import Sidebar from '../../components/sidebar/sidebar';

const Layout = () => {
  const theme = useTheme();
  const leftSpan = 1.5;
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
      <Box sx={{}}>
        <Grid container spacing={0}>
          <Grid item md={leftSpan} xs={leftSpan} lg={leftSpan}>
            <Sidebar widthVal={leftSpan} />
          </Grid>
          <Grid
            item
            md={12 - leftSpan}
            sx={{
              paddingLeft: '1rem',
            }}
          >
            <Outlet context={[12 - leftSpan, leftSpan]} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Layout;
