import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const TopTenant = ({ tenantName, totalRevenue }) => {
  return (
    <Card sx={{ width: '100%', maxWidth: 286, borderRadius: 5 }}>
      <CardContent style={{ fontWeight: 'bold' }}>
        <Typography
          component="div"
          sx={{ fontWeight: 'bold', marginBottom: 2, textAlign: 'center' }}
        >
          Top Performing Tenant
        </Typography>
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
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  fontWeight: 'bold',
                }}
              >
                <Typography sx={{ fontWeight: 'bold' }}>
                  Tenant Name:
                </Typography>
                <Typography sx={{ fontWeight: 'bold' }}>
                  Total Revenue:
                </Typography>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Typography>{tenantName}</Typography>
                <Typography>${totalRevenue}</Typography>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '20px',
              }}
            >
              <button
                style={{
                  fontSize: { xs: '14px', sm: '16px', md: '18px' },
                  borderRadius: '10px',
                  color: 'black',
                  backgroundColor: '#7E62D733',
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
