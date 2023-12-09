import React from 'react';
import { Grid } from '@mui/material';
import Navbar from '../../../admin/components/navbar/navbar';
import Sidebar from '../../../admin/components/sidebar/sidebar';
import { Outlet } from 'react-router-dom';

const ManageTenants = () => {
  const leftSpan = 1.5;
  const rigthSpan = 12 - leftSpan;
  return (
    <div>
      <header>
        <Navbar />
        <Grid container>
          <Grid item md={leftSpan}>
            <Sidebar leftSpan={leftSpan} />
          </Grid>
        </Grid>


        <Grid
          item
          md={rigthSpan}
          sx={
            {/*mt: '7vh',*/
            backgroundColor: '#DFDFDF',
            minHeight: '93vh',
          }}
        >
          <Outlet context={[rigthSpan, leftSpan]} />
        </Grid>
      </header>
      <main>
        {/* Main content goes here */}
      </main>
    </div>
  );
};

export default ManageTenants;
