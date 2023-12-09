import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import dummyOrderData from './dummyOrderData';
import { useTheme } from '@mui/material/styles';

const Order = () => {
  const theme = useTheme();

  return (
    <Card sx={{ width: '100%', maxWidth: 277, borderRadius: 5 }}>
      <CardContent
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
          Total Orders
        </Typography>
        <ResponsiveContainer width="90%" height={150}>
          <PieChart>
            <Pie
              data={dummyOrderData}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={60}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="orders"
            >
              {dummyOrderData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={theme.palette.pieChart[index % theme.palette.pieChart.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>

      <CardContent style={{ textAlign: 'center' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography sx={{ fontWeight: 'bold', fontSize: '14px' }}>
            Average Order per Month
          </Typography>
          <Typography
            sx={{ fontWeight: 'bold', borderRadius: '5px', color: 'purple' }}
          >
            25
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default Order;
