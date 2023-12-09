import React from 'react';
import { Grid } from '@mui/material';
import Navbar from '../../../admin/components/navbar/navbar';
import Sidebar from '../../../admin/components/sidebar/sidebar';

const ManageTenants = () => {
  const leftSpan = 1.5;
  return (
    <div>
      <header>
        <Navbar />
        <Grid container>
          <Grid item md={leftSpan}>
            <Sidebar leftSpan={leftSpan} />
          </Grid>
        </Grid>
      </header>
      <main>
        {/* Main content goes here */}
      </main>
    </div>
  );
};

export default ManageTenants;
