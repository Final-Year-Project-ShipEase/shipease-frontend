import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import tenatnBookingData from './dummyBookingData.js';
import { useTheme } from '@mui/material/styles';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const Booking = () => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        width: '100%',
        height: 280,
        position: 'relative',
        borderRadius: 5,
      }}
    >
      <CardContent
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
          Overall Booking
        </Typography>
        <ResponsiveContainer
          width="100%"
          height={180}
          style={{ marginLeft: '-5%', marginRight: '5%' }}
        >
          <LineChart data={tenatnBookingData}>
            <CartesianGrid
              vertical={true}
              horizontal={false}
              strokeDasharray="3 3"
              strokeWidth={3}
            />
            <XAxis dataKey="month" />
            <YAxis />
            <Line
              type="monotone"
              dataKey="bookings"
              stroke={theme.palette.secondary.main}
              strokeWidth={2}
            />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>

      <CardContent>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginLeft: '20%',
            marginRight: '20%',
          }}
        >
          <Typography sx={{ fontWeight: 'bold', marginTop: '-40px' }}>
            Total
          </Typography>
          <Typography sx={{ fontWeight: 'bold', marginTop: '-40px' }}>
            7
          </Typography>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginLeft: '20%',
            marginRight: '20%',
          }}
        >
          <Typography sx={{ fontWeight: 'bold', marginTop: '-10px' }}>
            Today
          </Typography>
          <Typography sx={{ fontWeight: 'bold', marginTop: '-10px' }}>
            3
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default Booking;
