import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import dummyBookingData from './dummyBookingData.js';
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
    <Card sx={{ width: '100%', maxWidth: 350, borderRadius: 5 }}>
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
        <ResponsiveContainer width="90%" height={150}>
          <LineChart data={dummyBookingData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="bookings"
              stroke={theme.palette.secondary.main}
              strokeWidth={2}
            />
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
          }}
        >
          <Typography sx={{ fontWeight: 'bold', marginTop: '-30px' }}>
            Total
          </Typography>
          <Typography sx={{ fontWeight: 'bold', marginTop: '-30px' }}>
            1500
          </Typography>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography sx={{ fontWeight: 'bold' }}>Today</Typography>
          <Typography sx={{ fontWeight: 'bold' }}>25</Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default Booking;
