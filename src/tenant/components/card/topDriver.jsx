import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const topPerformingDrivers = [
  { name: 'Driver 1', value: 400 },
  { name: 'Driver 2', value: 300 },
  { name: 'Driver 3', value: 300 },
  { name: 'Driver 4', value: 200 },
  { name: 'Driver 5', value: 100 },
];

const CustomTooltip = ({ active, payload }) => {
  if (active) {
    return (
      <div
        style={{
          backgroundColor: 'white',
          padding: '10px',
          border: '1px solid #ccc',
        }}
      >
        <p>{`${payload[0].name} : ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

const TopDriver = ({ tenantName, totalRevenue }) => {
  const theme = useTheme();
  const COLORS = [theme.palette.primary.main, theme.palette.secondary.main];

  return (
    <Card sx={{ width: '100%', height: '100%', borderRadius: 5 }}>
      <CardContent style={{ fontWeight: 'bold' }}>
        <Typography
          component="div"
          sx={{ fontWeight: 'bold', textAlign: 'center' }}
        >
          Top Performing Drivers: {tenantName}
        </Typography>

        <ResponsiveContainer
          width="100%"
          height={195}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <PieChart>
            <Pie
              data={topPerformingDrivers}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={70}
              innerRadius={60} // Set the inner radius for the transparent part
              startAngle={230}
              endAngle={-50}
              label
            >
              {topPerformingDrivers.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <CustomTooltip />
          </PieChart>
        </ResponsiveContainer>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '10px',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <button
                style={{
                  fontSize: { xs: '14px', sm: '16px', md: '18px' },
                  borderRadius: '10px',
                  color: 'black',
                  backgroundColor: theme.palette.primary.color1,
                  padding: '10px',
                  cursor: 'pointer',
                  border: 'none',
                }}
              >
                Driver Details
              </button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TopDriver;
