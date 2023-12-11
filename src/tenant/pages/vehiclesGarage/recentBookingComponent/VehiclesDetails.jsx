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
const VehiclesDetails = ({ tenantId }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [tenant, setTenant] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <Card
      sx={{
        backgroundColor: theme.palette.primary.backgroundColor,
        width: '100%',
        height: '330px',
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

      <Grid container spacing={2} sx={{ marginLeft: '65px'}}>
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
                    sx={{marginLeft: "-140px", display: 'flex', flexDirection: 'row', alignItems: 'center' }}
                  >
                    <Grid
                    sx={{
                      marginTop: '20px',
                    
                    }}>
                      <Typography
                        sx={{ color: theme.palette.buttons.main, fontSize: '20px' }}
                      >
                        {tenant?.name || 'Trucker Trailer'}
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
                      marginTop: '5px',
                      marginLeft: "-110px",
                    }}
                  >
                    <Grid item xs={8}
                    sx={{
                      marginTop: '-20px',
                    }}>
                      <Typography
                        sx={{ color: theme.palette.buttons.main, fontSize: '20px' }}
                      >
                        ID: {tenant?.phoneNo || 'D-321'}
                      </Typography>
                      <Typography
                        sx={{ color: theme.palette.buttons.main, fontSize: '16px' }}
                      >
                        Register No:{' '}
                        {tenant?.cities
                          ? tenant?.cities.map((city) => city).join(', ')
                          : 'R-321'}
                      </Typography>
                      <Typography
                        sx={{ color: theme.palette.buttons.main, fontSize: '16px' }}
                      >
                        Tracker No: {tenant?.id || 'T-321'}
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      xs={6}
                      sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginLeft: "-290px",
                      }}
                    >
                      <Grid>
                        <Typography
                          sx={{ color: theme.palette.buttons.main, fontSize: '20px' }}
                        >
                          Owner Cnic :{tenant?.status || '333-0285351821'}
                        </Typography>
                        <Typography
                          sx={{ color: theme.palette.buttons.main, fontSize: '16px', marginTop:"10px"}}
                        >
                          Original Document:{' '}
                        <Button startIcon={<AddIcon />} variant="contained" color="secondary" style={{marginLeft:"20px", borderRadius: "5px"}}>
                          Vehicle Document
                        </Button>
                      </Typography>

                      <Typography
                          sx={{ color: theme.palette.buttons.main, fontSize: '16px', marginTop:"10px"}}
                        >
                          Inspection Report:{' '}
                        <Button startIcon={<AddIcon />} variant="contained" color="secondary" style={{ marginTop: "10px",marginLeft:"30px", borderRadius: "5px"}}>
                          Inspection Report
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

export default VehiclesDetails;
