import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import SubCard from './subCard'

const SummaryCard = () => {
  return (
    <Card
      sx={{
        width: '100%',
        maxWidth: 440,
        height: 280,
        position: 'relative',
        borderRadius: 5,
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          gutterBottom
          sx={{ textAlign: 'center', marginBottom: '5px', color: 'black' }}
        >
          Performance Summary, This Month
        </Typography>
      </CardContent>

      <CardContent
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <SubCard content="Tenant's Registered This Month" />
          <SubCard content="User's Registered This Month" />
        </div>
      </CardContent>

      <CardContent
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <SubCard content="Driver's Registered This Month" />
          <SubCard content="Vehicle's Registered This Month" />
        </div>
      </CardContent>
    </Card>
  );
};

export default SummaryCard;
