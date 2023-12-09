import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const Order = () => {
  const data = [
    { month: 'Jan', orders: 1 },
    { month: 'Feb', orders: 2 },
    { month: 'Mar', orders: 3 },
    { month: 'Apr', orders: 4 },
    { month: 'May', orders: 5 },
    { month: 'Jun', orders: 6 },
    { month: 'Jul', orders: 7 },
    { month: 'Aug', orders: 8 },
    { month: 'Sep', orders: 9 },
    { month: 'Oct', orders: 10 },
    { month: 'Nov', orders: 11 },
    { month: 'Dec', orders: 12 },
  ];

  const COLORS = ['red', '#7E62D7', '#FF8C00', '#FFD700', '#36A2EB', '#FF6384'];

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
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={60}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="orders"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>

      <CardContent style={{ alignText: 'center' }}>
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
