import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const ApprovalDetail = ({ details }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        width: '100%',
        height: 150,
        borderRadius: 3,
        backgroundColor: theme.palette.primary.backgroundColor,
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
          style={{
            fontWeight: 'bold',
            textAlign: 'center',
            color: theme.palette.buttons.main,
          }}
        >
          Vehicle Approval Pending
        </Typography>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: '8px',
          }}
        >
          <button
            style={{
              width: '147px',
              height: '36px',
              color: theme.palette.buttons.color,
              backgroundColor: theme.palette.buttons.main,
              borderRadius: '10px',
              fontSize: '14px',
              border: 'none ',
            }}
          >
            {details?.date || '19-nov-2022'}
          </button>
          <button
            style={{
              width: '107px',
              height: '36px',
              color: theme.palette.buttons.color,
              backgroundColor: theme.palette.table.rowHover,
              borderRadius: '20px',
              fontSize: '14px',
              border: 'none',
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: theme.palette.primary.main,
              },
            }}
            onClick={() => navigate('/admin/vehiclesapproval')}
          >
            View
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
            sx={{
              fontWeight: 'bold',
              color: theme.palette.buttons.main,
              fontSize: '14px',
            }}
          >
            Vehicle Details
          </Typography>
          <Typography
            sx={{
              fontWeight: 'bold',
              color: theme.palette.buttons.main,
              fontSize: '14px',
            }}
          >
            {details?.regNo || 'B-31023'}
          </Typography>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Typography
            sx={{ color: theme.palette.buttons.main, fontSize: '14px' }}
          >
            {details?.cities.map((city) => city.name).join(', ') ||
              'ThunderBlaze'}
          </Typography>
          <Typography
            sx={{ color: theme.palette.buttons.main, fontSize: '14px' }}
          >
            ZAB-1234
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default ApprovalDetail;
