import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
} from 'recharts';

const topPerformingTenants = [
  { name: 'Tenant 1', value: 400 },
  { name: 'Tenant 2', value: 300 },
];

const CustomTooltip = ({ active, payload }) => {
  const theme = useTheme();
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

const TopTenant = ({ tenantName, totalRevenue }) => {
  const theme = useTheme();
  const COLORS = [theme.palette.primary.main, theme.palette.secondary.main];

  return (
    <Card sx={{ width: '100%', height: '100%', borderRadius: 5 }}>
      <CardContent style={{ fontWeight: 'bold' }}>
        <Typography
          component="div"
          sx={{ fontWeight: 'bold', textAlign: 'center' }}
        >
          Top Performing Tenants
        </Typography>

        <ResponsiveContainer width="100%" height={195}>
          <PieChart>
            <Pie
              data={topPerformingTenants}
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
              {topPerformingTenants.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend
              align="center"
              verticalAlign="bottom"
              height={46}
              style={{ marginTop: '1%' }}
            />
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
                marginTop: '-13px',
              }}
            >
              <button
                style={{
                  fontSize: { xs: '14px', sm: '16px', md: '18px' },
                  borderRadius: '10px',
                  color: 'black',
                  backgroundColor: theme.palette.primary.color1,
                  padding: '10px 20px',
                  cursor: 'pointer',
                  border: 'none',
                }}
              >
                Tenant Details
              </button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TopTenant;
