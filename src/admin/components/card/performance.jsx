import React from 'react';
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

const Performance = () => {
  const data = [
    { month: 'Jan', bookings: 20, bookings1: 50 },
    { month: 'Feb', bookings: 40, bookings1: 20 },
    { month: 'Mar', bookings: 10, bookings1: 40 },
    { month: 'Apr', bookings: 80, bookings1: 60 },
    { month: 'May', bookings: 90, bookings1: 50 },
    { month: 'Jun', bookings: 20, bookings1: 20 },
    { month: 'Jul', bookings: 20, bookings1: 60 },
    { month: 'Aug', bookings: 40, bookings1: 40 },
    { month: 'Sep', bookings: 10, bookings1: 80 },
    { month: 'Oct', bookings: 80, bookings1: 20 },
    { month: 'Nov', bookings: 90, bookings1: 60 },
    { month: 'Dec', bookings: 20, bookings1: 33 },
  ];

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
