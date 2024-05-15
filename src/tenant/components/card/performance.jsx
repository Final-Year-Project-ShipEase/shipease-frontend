import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import tenantPerformanceData from './dummyPerformanceData';
import { useTheme } from '@mui/material/styles';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

const Performance = () => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        width: '100%',
        height: '100%',
        borderRadius: 5,
      }}
    >
      <CardContent
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography
          sx={{ fontWeight: 'bold', fontSize: { xs: 18, sm: 20, md: 17 } }}
        >
          Performance Line Chart
        </Typography>
        <Typography sx={{ fontSize: { xs: 12, sm: 14, md: 13 } }}>
          User Performance This Month
        </Typography>

        <ResponsiveContainer
          width="100%"
          height={190}
          style={{ marginTop: '1%' }}
        >
          <LineChart data={tenantPerformanceData}>
            <CartesianGrid
              vertical={false}
              horizontal={true}
              strokeLinecap="3 3"
              strokeWidth={0.3}
            />
            <XAxis dataKey="month" strokeWidth={0} />
            <YAxis strokeWidth={0} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="bookings"
              stroke={theme.palette.secondary.main}
              strokeWidth={2}
              name="Driver"
            />
            <Line
              type="monotone"
              dataKey="bookings1"
              stroke={theme.palette.primary.main}
              strokeWidth={2}
              name="Booking"
            />
            <Legend />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default Performance;
