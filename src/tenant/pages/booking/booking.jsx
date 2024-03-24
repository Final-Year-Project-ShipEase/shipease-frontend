import React from 'react';
import { Box, Grid } from '@mui/material';
import PageHeader from './pageHeader';
import BookingInformation from './components/bookingCard/bookingInformation';
import Completed from './components/card/completed';
import Active from './components/card/active';
import Reserved from './components/card/reserved';

const Booking = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <PageHeader />
      </Grid>
      <Grid item xs={12}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <Completed />
          <Active />
          <Reserved />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <BookingInformation />
      </Grid>
    </Grid>
  );
};

export default Booking;