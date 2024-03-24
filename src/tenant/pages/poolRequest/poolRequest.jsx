import React from 'react';
import { Box, Grid } from '@mui/material';
import PageHeader from './pageHeader';
import PoolRequestInformation from './poolRequestCard/poolrequestInformation';

const poolRequest = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <PageHeader />
      </Grid>
      <Grid item xs={12}>
        <PoolRequestInformation />
      </Grid>
    </Grid>
  );
};

export default poolRequest;