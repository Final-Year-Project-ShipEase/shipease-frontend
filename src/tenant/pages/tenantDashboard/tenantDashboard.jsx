import React from "react";
import CardViewImage from '../../components/card/welcome';
import SummaryCard from '../../components/card/summary';
import Booking from '../../components/card/booking';
import Performance from '../../components/card/performance';
import TopTenant from '../../components/card/topDriver';
import Order from '../../components/card/order';
import VehicleApproval from '../../components/card/UserCommunication';
import DriverApproval from '../../components/card/poolRequestBox';
import { Grid } from '@material-ui/core';

const TenantDashboard = () => {
    const name = 'Muntazer Mehdi';
    const tenantName = 'Abdullah Minhas';
    const revenue = '250K';
    return (
        <>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            margin: '2%'
          }}
        >
          <Grid container spacing={2}style={{marginTop:"2%"}}>
            <Grid item md={3} xs={12}>
              <CardViewImage name={name}></CardViewImage>
            </Grid>
            <Grid item md={5}  xs={12}>
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
            <VehicleApproval></VehicleApproval>
            </Grid>
            <Grid item md={4} xs={12}>
            <Order></Order>
            </Grid>
            <Grid item md={4} xs={12}>
            <DriverApproval></DriverApproval>
            </Grid>
          </Grid>
        </div>
    </>
    );
};

export default TenantDashboard;