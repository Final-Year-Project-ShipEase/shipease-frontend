import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import DriverDetail from '../card/driverdetails'; // Replace with the correct path to your SubCard component

const VehicleApproval = () => {
  return (
    <Card sx={{ width: 385, height: 280, borderRadius: 5, overflow: 'auto' }}>
      <CardContent>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <DriverDetail></DriverDetail>
          <DriverDetail></DriverDetail>
          <DriverDetail></DriverDetail>
          <DriverDetail></DriverDetail>
        </div>
      </CardContent>
    </Card>
  );
};

export default VehicleApproval;
