import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const ApprovalDetail = () => {

  const theme = useTheme();
  
  return (
    <Card
      sx={{
        width: 351,
        height: 150,
        borderRadius: 3,
        backgroundColor: '#2B2626',
        marginTop: '5px',
      }}
    >
      <CardContent
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Typography
          style={{ fontWeight: 'bold', textAlign: 'center', color: 'white' }}
        >
          Vehicle Approval Pending
        </Typography>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: '5px',
          }}
        >
          <button
            style={{
              width: '147px',
              height: '36px',
              color: 'black',
              backgroundColor: theme.palette.button.main,
              borderRadius: '10px',
              fontSize: '20px',
              border: 'none ',
            }}
          >
            Date
          </button>
          <button
            style={{
              width: '107px',
              height: '36px',
              color: 'black',
              backgroundColor: theme.palette.table.rowHover,
              borderRadius: '20px',
              fontSize: '14px',
              border: 'none',
            }}
          >
            View Report
          </button>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: '8px',
          }}
        >
          <Typography
            sx={{ fontWeight: 'bold', color: theme.palette.button.main, fontSize: '14px' }}
          >
            Vehicle Details
          </Typography>
          <Typography
            sx={{ fontWeight: 'bold', color: theme.palette.button.main, fontSize: '14px' }}
          >
            Registration Number
          </Typography>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: '8px',
          }}
        >
          <Typography sx={{ color: theme.palette.button.main, fontSize: '14px' }}>
            ThunderBlaze
          </Typography>
          <Typography sx={{ color: theme.palette.button.main, fontSize: '14px' }}>
            ZAB-1234
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default ApprovalDetail;
