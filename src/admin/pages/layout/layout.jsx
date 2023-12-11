import React from 'react';
import { Grid, useTheme } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/navbar/navbar';
import Sidebar from '../../components/sidebar/sidebar';

const Layout = () => {
  const theme = useTheme();
  const leftSpan = 1.5;
  const rigthSpan = 12 - leftSpan;
  return (
    <>
      <Navbar />
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
            mt: '7vh',
            backgroundColor: theme.palette.page.main,
            minHeight: '93vh',
          }}
        >
          <Outlet context={[rigthSpan, leftSpan]} />
        </Grid>
      </Grid>
    </>
  );
};

export default Layout;
