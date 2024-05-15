import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from 'recharts';
import orderData from './dummyOrderData';
import { useTheme } from '@mui/material/styles';

const Order = () => {
  const theme = useTheme();
  const totalOrders = orderData.reduce((a, b) => a + b.orders, 0);
  const length = orderData.length;
  const avgOrder = totalOrders / length;

  return (
    <Card sx={{ width: '100%', borderRadius: 5, height: '280px' }}>
      <CardContent
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
        }}
      >
        <Typography sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
          Total Orders
        </Typography>
        <ResponsiveContainer width="100%" height={150}>
          <PieChart
            margin={{
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
            }}
          >
            <Pie
              data={orderData}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={70}
              fill={theme.palette.pieChart.COLORS}
              dataKey="orders"
            >
              {orderData.map((entry, index) => (
                <Cell
                  key={orderData[index].month}
                  fill={
                    theme.palette.pieChart[
                      index % theme.palette.pieChart.length
                    ]
                  }
                />
              ))}
              <LabelList
                dataKey="month"
                position="outside"
                style={{
                  fill: 'black',
                  fontStyle: 'italic',
                  fontWeight: 'bold',
                }}
                stroke="none"
                offset={10}
                angle={-30}
              />

              <LabelList
                dataKey="orders"
                position="inside"
                style={{ fill: 'black' }}
                offset={10}
                angle={30}
              />
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
            marginLeft: '10%',
          }}
        >
          <Typography sx={{ fontWeight: 'bold', fontSize: '14px' }}>
            Average Order per Month:
          </Typography>
          <Typography
            sx={{
              fontWeight: 'bold',
              borderRadius: '5px',
              color: 'purple',
              marginLeft: '5%',
            }}
          >
            {avgOrder}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default Order;
