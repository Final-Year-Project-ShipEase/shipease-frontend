import React, { useEffect, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import busImage from '../../../resources/image 1.png';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../../../utils/spinner';
import { formatTimestamp } from '../../../../utils/timestamp';
import PageHeader from '../../../../admin/pages/driversApproval/pageHeader';
import AddIcon from '@mui/icons-material/Add';
const DriversDetails = ({ tenantId }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [tenant, setTenant] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <Card
      sx={{
        backgroundColor: theme.palette.primary.backgroundColor,
        width: '100%',
        height: '350px',
        borderRadius: '10px',
      }}
    >
      {loading && <Spinner />}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '96%',
          marginLeft: '5%',
          height: '6%',
          marginLeft: '25px',
          marginTop: '35px',
        }}
      >
        <PageHeader />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          padding: 1,
          marginTop: '20px',
        }}
        onClick={() => {
          navigate('/manageTenants');
        }}
      >
        <ArrowBackRoundedIcon
          sx={{
            color: theme.palette.primary.main,
            cursor: 'pointer',
          }}
        />
        <Button sx={{ color: theme.palette.buttons.main, fontSize: '12px' }}>
          Back to Tenant List
        </Button>
      </Box>

      <Grid container spacing={2} sx={{ marginLeft: '65px' }}>
        <Grid item xs={3}>
          <img
            style={{ borderRadius: '5px', height: '100%' }}
            src={busImage}
            alt="Bus"
          />
        </Grid>
        <Grid item xs={9}>
          <Grid
            item
            xs={6}
            sx={{
              marginLeft: '-140px',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Grid>
              <Typography
                sx={{ color: theme.palette.buttons.main, fontSize: '20px' }}
              >
                {tenant?.name || 'John Doe'}
              </Typography>
              <Typography
                sx={{ color: theme.palette.buttons.main, fontSize: '16px' }}
              >
                @{tenant?.username || 'hello123'}
              </Typography>
              <Typography
                sx={{ color: theme.palette.buttons.main, fontSize: '16px' }}
              >
                {tenant?.email || 'hello123@gmail.com'}
              </Typography>
            </Grid>
          </Grid>

          <Grid
            item
            xs={12}
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: '10px',
              marginLeft: '-140px',
            }}
          >
            <Grid
              item
              xs={8}
              sx={{
                marginTop: '-20px',
              }}
            >
              <Typography
                sx={{ color: theme.palette.buttons.main, fontSize: '20px' }}
              >
                Phone: {tenant?.phoneNo || '1234567890'}
              </Typography>
              <Typography
                sx={{ color: theme.palette.buttons.main, fontSize: '16px' }}
              >
                Language:{' '}
                {tenant?.cities
                  ? tenant?.cities.map((city) => city).join(', ')
                  : 'English'}
              </Typography>
              <Typography
                sx={{ color: theme.palette.buttons.main, fontSize: '16px' }}
              >
                Driver Id: {tenant?.id || '12345678'}
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: '-170px',
              }}
            >
              <Grid>
                <Typography
                  sx={{ color: theme.palette.buttons.main, fontSize: '20px' }}
                >
                  Status :{tenant?.status || 'Active'}
                </Typography>
                <Typography
                  sx={{ color: theme.palette.buttons.main, fontSize: '16px' }}
                >
                  Created At :
                  {tenant?.createdAt
                    ? formatTimestamp(tenant.createdAt)
                    : '19/4/2023 01:23 PM EDT'}
                </Typography>
                <Typography
                  sx={{ color: theme.palette.buttons.main, fontSize: '16px' }}
                >
                  Updated At :{' '}
                  {tenant?.updatedAt
                    ? formatTimestamp(tenant.updatedAt)
                    : '19/4/2023 01:23 PM EDT'}
                </Typography>
                <Typography
                  sx={{
                    color: theme.palette.buttons.main,
                    fontSize: '16px',
                    marginTop: '10px',
                  }}
                >
                  license Digital Copy :{' '}
                  <Button
                    startIcon={<AddIcon />}
                    variant="contained"
                    color="secondary"
                    style={{ marginLeft: '20px' }}
                  >
                    License Image
                  </Button>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default DriversDetails;
