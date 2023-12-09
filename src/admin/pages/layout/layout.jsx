import React from 'react';
import { Grid } from '@mui/material';
import Navbar from '../../../admin/components/navbar/navbar';
import Sidebar from '../../../admin/components/sidebar/sidebar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const leftSpan = 1.5;
  const rigthSpan = 12 - leftSpan;
  return (
    <>
      {/* <Navbar />
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
        */}
        <Grid
          item
          md={rigthSpan}
          sx={{
            mt: '7vh',
            backgroundColor: '#FAFAFA',
            minHeight: '93vh',
          }}
        >
          <Outlet context={[rigthSpan, leftSpan]} />
        </Grid>
    </>
  );
};

export default Layout;
