import React from 'react';
import CardViewImage from '../../components/card/welcome';
import SummaryCard from '../../components/card/summary';
import Booking from '../../components/card/booking';
import Performance from '../../components/card/performance';
import TopTenant from '../../components/card/topTenant';
import Order from '../../components/card/order';
import VehicleApproval from '../../components/card/vehicleApproval';
import DriverApproval from '../../components/card/driverApproval';
<<<<<<< Updated upstream
=======
import { Grid } from '@material-ui/core';

>>>>>>> Stashed changes

const AdminDashboard = () => {
  const name = 'Hamza Idrees';
  const tenantName = 'Abdullah Minhas';
  const revenue = '250K';
  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '15px',
        }}
      >
        <CardViewImage name={name}></CardViewImage>

        <SummaryCard></SummaryCard>

        <Booking></Booking>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '15px',
        }}
      >
        <Performance></Performance>
        <TopTenant tenantName={tenantName} totalRevenue={revenue}></TopTenant>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '15px',
        }}
      >
        <VehicleApproval></VehicleApproval>
        <Order></Order>
        <DriverApproval></DriverApproval>
      </div>
    </>
  );
};

export default AdminDashboard;
