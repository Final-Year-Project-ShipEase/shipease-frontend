import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import ArrowCircleUpRoundedIcon from '@mui/icons-material/ArrowCircleUpRounded';
import ArrowCircleDownRoundedIcon from '@mui/icons-material/ArrowCircleDownRounded';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const SubCard = ({ content }) => {
  const [count, setCount] = useState(100); // Initial count value
  const [isIncreasing, setIsIncreasing] = useState(true); // Initial state

  const data = [
    { month: 'Jan', tenants: 20 },
    { month: 'Feb', tenants: 40 },
    { month: 'Mar', tenants: 10 },
    { month: 'Apr', tenants: 80 },
    { month: 'May', tenants: 90 },
    { month: 'Jun', tenants: 20 },
  ];

  return (
    <Card
      sx={{
        width: 200,
        height: 100,
        borderRadius: 3,
        marginBottom: 1,
        marginTop: '-30px',
        marginRight: '10px',
      }}
    >
      <CardContent
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: '-10px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Typography
            sx={{ width: 55, height: 40, fontWeight: 'bold', fontSize: 25 }}
          >
            {count}
          </Typography>
          <div
            style={{
              marginLeft: '60px',
              marginTop: '2px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {isIncreasing ? (
              <>
                <ArrowCircleUpRoundedIcon
                  sx={{ color: '#60B478', width: 30, height: 29 }}
                />
                <Typography
                  sx={{
                    width: 25,
                    height: 20,
                    fontWeight: 'bold',
                    fontSize: '10px',
                    color: '#60B478',
                  }}
                >
                  +{Math.abs(count)}%
                </Typography>
              </>
            ) : (
              <>
                <ArrowCircleDownRoundedIcon
                  sx={{ color: '#7E62D7', width: 30, height: 29 }}
                />
                <Typography
                  sx={{
                    width: 25,
                    height: 20,
                    fontWeight: 'bold',
                    fontSize: '10px',
                    color: '#7E62D7',
                  }}
                >
                  -{Math.abs(count)}%
                </Typography>
              </>
            )}
          </div>
        </div>
      </CardContent>

      <CardContent
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '-60px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Typography
            sx={{ width: 70, height: 25, fontWeight: 'bold', fontSize: '8px' }}
          >
            Tenant's Register This Month
          </Typography>
        </div>

        <ResponsiveContainer width={250} height={120}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="tenants"
              stroke={isIncreasing ? '#60B478' : '#7E62D7'}
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default SubCard;
