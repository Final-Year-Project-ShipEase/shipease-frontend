import React, { useState } from 'react';
import CardViewImage from '../../components/card/welcome';
import SummaryCard from '../../components/card/summary';
import Booking from '../../components/card/booking';
import Performance from '../../components/card/performance';
import TopTenant from '../../components/card/topTenant';
import Order from '../../components/card/order';
import VehicleApproval from '../../components/card/vehicleApproval';
import DriverApproval from '../../components/card/driverApproval';
import { Grid } from '@material-ui/core';
import Box from '@material-ui/core/Box';

const AdminDashboard = () => {
  const [name, setName] = useState('Hamza');
  const [tenantName, setTenantName] = useState('Abdullah');
  const [revenue, setRevenue] = useState('50k');

  return (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '2%',
      }}
    >
      <Grid container spacing={2}>
        <Grid item md={12} xs={12}>
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
          </Grid>
        </Grid>
        <Grid item md={12} xs={12}>
          <Grid container spacing={2}>
            <Grid item md={8} xs={12}>
              <Performance></Performance>
            </Grid>
            <Grid item md={4} xs={12}>
              <TopTenant
                tenantName={tenantName}
                totalRevenue={revenue}
              ></TopTenant>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={12} xs={12}>
          <Grid container spacing={2}>
            <Grid item md={4} xs={12}>
              <VehicleApproval></VehicleApproval>
            </Grid>
            <Grid item md={4} xs={12}>
              <Order></Order>
            </Grid>
            <Grid item md={4} xs={12}>
              <DriverApproval></DriverApproval>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AdminDashboard;
