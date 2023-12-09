import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import dummyPerformanceData from './dummyPerformanceData';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const Performance = () => {
 

  return (
    <Card
      sx={{
        width: '100%',
        maxWidth: 800,
        height: 250,
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
        <Typography
          sx={{ fontWeight: 'bold', fontSize: { xs: 18, sm: 20, md: 22 } }}
        >
          Performance Line Chart
        </Typography>
        <Typography sx={{ fontSize: { xs: 12, sm: 14, md: 16 } }}>
          User Performance This Month
        </Typography>

        <ResponsiveContainer width="90%" height={150}>
          <LineChart data={dummyPerformanceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="bookings"
              stroke="#60B478"
              strokeWidth={2}
              name="User"
            />
            <Line
              type="monotone"
              dataKey="bookings1"
              stroke="#7E62D7"
              strokeWidth={2}
              name="Booking"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default Performance;
