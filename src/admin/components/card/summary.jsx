import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import SubCard from './subCard';

const SummaryCard = () => {
  return (
    <Card
      sx={{
        width: '100%',
        height: 280,
        position: 'relative',
        borderRadius: 5,
      }}
    >
      <CardContent
        sx={{
          wordWrap: 'break-word',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          width: '100%',
        }}
      >
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
          marginLeft: '3%',
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
          <SubCard content="Tenant's Registered This Month" count={5} />
          <SubCard content="User's Registered This Month" count={5} />
        </div>
      </CardContent>

      <CardContent
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginLeft: '3%',
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
          <SubCard content="Driver's Registered This Month" count={10} />
          <SubCard content="Vehicle's Registered This Month" count={15} />
        </div>
      </CardContent>
    </Card>
  );
};

export default SummaryCard;
