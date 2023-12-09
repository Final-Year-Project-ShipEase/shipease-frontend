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
          xs={rigthSpan}
          lg={rigthSpan}
          sx={{
            mt: '7vh',
            backgroundColor: '#DFDFDF',
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
