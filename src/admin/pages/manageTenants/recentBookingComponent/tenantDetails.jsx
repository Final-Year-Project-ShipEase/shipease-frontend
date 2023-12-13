import React, { useEffect, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import busImage from '../../../resources/image 2.png';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import { useNavigate } from 'react-router-dom';
import useTenantService from '../../../services/tenantService';
import Spinner from '../../../../utils/spinner';
import { formatTimestamp } from '../../../../utils/timestamp';
import { useMediaQuery } from '@mui/material';


const TenantDetails = ({ tenantId }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [tenant, setTenant] = useState([]);
  const { getTenantById } = useTenantService();
  const [loading, setLoading] = useState(false);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const fetchTenantData = async () => {
      setLoading(true);
      const data = await getTenantById(tenantId);
      setTenant(data);
      setLoading(false);
    };
    fetchTenantData();
  }, []);

  return (
    <Card
      sx={{
        backgroundColor: theme.palette.primary.backgroundColor,
        width: '100%',
        height: '290px',
        borderRadius: '10px',
      }}
    >
      {loading && <Spinner />}
      <Grid container spacing={2} sx={{ marginLeft: '5%', mt: '2%' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          padding: 1,
          marginTop: '-10px',
          marginLeft: '-3%',
          marginBottom: '10px',
        }}
        onClick={() => {
          navigate('/admin/manageTenants');
        }}
      >
        <ArrowBackRoundedIcon
          sx={{
            color: theme.palette.buttons.main,
            cursor: 'pointer',
          }}
        />
        <Button sx={{ color: theme.palette.buttons.main, fontSize: '12px' }}>
          Back to Tenant List
        </Button>
      </Box>

      <Grid container spacing={2} sx={{ marginLeft: '5px' }}>
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
              marginLeft: isSmallScreen ? '-20px' : '-140px',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Grid>
              <Typography
                sx={{ color: theme.palette.buttons.main, fontSize: '20px' }}
              >
                Name: {tenant?.name || 'John Doe'}
              </Typography>
              <Typography
                sx={{ color: theme.palette.buttons.main, fontSize: '16px' }}
              >
                Username: @{tenant?.username || 'hello123'}
              </Typography>
              <Typography
                sx={{ color: theme.palette.buttons.main, fontSize: '16px' }}
              >
                Email: {tenant?.email || 'hello123@gmail.com'}
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
              marginLeft: isSmallScreen ? '-20px' : '-140px',
              marginTop: '30px', 
            }}
          >
            <Grid item xs={8}>
              <Typography
                sx={{ color: theme.palette.buttons.main, fontSize: '20px' }}
              >
                Phone No: {tenant?.phoneNo || '1234567890'}
              </Typography>
              <Typography
                sx={{ color: theme.palette.buttons.main, fontSize: '16px' }}
              >
                Cities:{' '}
                {tenant?.cities
                  ? tenant?.cities.map((city) => city).join(', ')
                  : 'NewYork'}
              </Typography>
              <Typography
                sx={{ color: theme.palette.buttons.main, fontSize: '16px' }}
              >
                Tenant Id: {tenant?.id || '12345678'}
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: isSmallScreen ? '-140px' : '-250px',
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
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      </Grid>
    </Card>
  );
};

export default TenantDetails;
