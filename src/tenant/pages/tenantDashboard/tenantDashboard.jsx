import React, { useState } from 'react';
import CardViewImage from '../../components/card/welcome';
import SummaryCard from '../../components/card/summary';
import Booking from '../../components/card/booking';
import Performance from '../../components/card/performance';
import TopTenant from '../../components/card/topDriver';
import Order from '../../components/card/order';
import MessageBox from '../../components/card/UserCommunication';
import PoolRequestBox from '../../components/card/poolRequestBox';
import { Grid, Box } from '@mui/material';

const TenantDashboard = () => {
  const [name, setName] = useState('Muntazer Mehdi');
  const [tenantName, setTenantName] = useState('Abdullah Minhas');
  const [revenue, setRevenue] = useState('250K');

  return (
    <Box
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '2%',
      }}
    >
      <Grid container spacing={2}>
        <Grid item md={3} xs={12}>
          <CardViewImage name={name}></CardViewImage>
        </Grid>
        <Grid item md={5} xs={12}>
          <SummaryCard></SummaryCard>
        </Grid>
        <Grid item md={4} xs={12}>
          <Booking></Booking>
        </Grid>
        <Grid item md={8} xs={12}>
          <Performance></Performance>
        </Grid>
        <Grid item md={4} xs={12}>
          <TopTenant tenantName={tenantName} totalRevenue={revenue}></TopTenant>
        </Grid>
        <Grid item md={4} xs={12}>
          <MessageBox></MessageBox>
        </Grid>
        <Grid item md={4} xs={12}>
          <Order></Order>
        </Grid>
        <Grid item md={4} xs={12}>
          <PoolRequestBox></PoolRequestBox>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TenantDashboard;
