import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import DriverDetail from './poolRequest';
import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const PoolRequestBox = () => {
  const theme = useTheme();
  return (
    <Card sx={{ width: "100%", height: 250, borderRadius: 5, overflow: 'auto', backgroundColor: theme.palette.primary.backgroundColor}}>
      <CardContent>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '100%',
            colour: 'black',
          }}
        >
        <Typography
          style={{ fontWeight: 'bold', textAlign: 'center', color: 'white', marginBottom: '-2px' }}
        >
          Pool Request
        </Typography>
          <DriverDetail></DriverDetail>
          <DriverDetail></DriverDetail>
          <DriverDetail></DriverDetail>
          <DriverDetail></DriverDetail>
          <DriverDetail></DriverDetail>
          <DriverDetail></DriverDetail>
        </div>
      </CardContent>
    </Card>
  );
};

export default PoolRequestBox;
