import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
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
  const data = [
    { month: 'Jan', bookings: 20 },
    { month: 'Feb', bookings: 40 },
    { month: 'Mar', bookings: 10 },
    { month: 'Apr', bookings: 80 },
    { month: 'May', bookings: 90 },
    { month: 'Jun', bookings: 20 },
    { month: 'Jul', bookings: 20 },
    { month: 'Aug', bookings: 40 },
    { month: 'Sep', bookings: 10 },
    { month: 'Oct', bookings: 80 },
    { month: 'Nov', bookings: 90 },
    { month: 'Dec', bookings: 20 },
  ];

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
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="bookings"
              stroke="#60B478"
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
