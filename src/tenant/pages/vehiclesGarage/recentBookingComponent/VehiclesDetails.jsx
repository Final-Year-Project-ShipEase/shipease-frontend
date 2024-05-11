import React, { useEffect, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import busImage from '../../../resources/image 2.png';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../../../utils/spinner';
import AddIcon from '@mui/icons-material/Add';
import PageHeader from '../pageHeader';
import { useVehicleService } from '../../../../services/vehicleServices';
import VehicleImage from '../../driversGarage/components/vehicleImage';

const VehiclesDetails = ({ tenantId }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [vehicle, setVehicle] = useState([]);
  const [loading, setLoading] = useState(false);
  const { getVehicle } = useVehicleService();

  useEffect(() => {
    const fetchVehicle = async () => {
      try {
        setLoading(true);
        const response = await getVehicle(tenantId);
        setVehicle(response);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchVehicle();
  }, [tenantId]);

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
      <Grid container spacing={2} sx={{ mt: '2%', ml: '5%' }}>
        <Grid item xs={3}>
          <Box
            sx={{
              width: '100px',
              height: '100px',
            }}
          >
            {vehicle.image ? (
              <VehicleImage image={vehicle.image} />
            ) : (
              <img
                style={{ borderRadius: '5px', height: '200px', width: '200px' }}
                src={busImage}
                alt="Bus"
              />
            )}
          </Box>
        </Grid>
        <Grid item xs={9}>
          <Grid
            item
            xs={6}
            sx={{
              marginLeft: '-100px',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Grid
              sx={{
                marginTop: '20px',
              }}
            >
              <Typography
                sx={{ color: theme.palette.buttons.main, fontSize: '20px' }}
              >
                Registration No: {vehicle?.regNo || 'Trucker Trailer'}
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
              marginLeft: '-60px',
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
                ID: {vehicle?.id || 'D-321'}
              </Typography>
              <Typography
                sx={{ color: theme.palette.buttons.main, fontSize: '16px' }}
              >
                Types:{' '}
                {vehicle?.type
                  ? vehicle?.type.map((city) => city).join(', ')
                  : 'R-321'}
              </Typography>
              <Typography
                sx={{ color: theme.palette.buttons.main, fontSize: '16px' }}
              >
                Tracker No: {vehicle?.trackerNo || 'T-321'}
              </Typography>
              <Typography
                sx={{ color: theme.palette.buttons.main, fontSize: '16px' }}
              >
                Location: {vehicle?.location || 'NewYork'}
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: '-290px',
              }}
            >
              <Grid>
                <Typography
                  sx={{ color: theme.palette.buttons.main, fontSize: '20px' }}
                >
                  Owner Cnic :{vehicle?.ownerCnic || '333-0285351821'}
                </Typography>
                <Typography
                  sx={{
                    color: theme.palette.buttons.main,
                    fontSize: '16px',
                    marginTop: '10px',
                  }}
                >
                  Original Document:{' '}
                  <Button
                    startIcon={<AddIcon />}
                    variant="contained"
                    color="secondary"
                    style={{ marginLeft: '20px', borderRadius: '5px' }}
                  >
                    Vehicle Document
                  </Button>
                </Typography>

                <Typography
                  sx={{
                    color: theme.palette.buttons.main,
                    fontSize: '16px',
                    marginTop: '10px',
                  }}
                >
                  Inspection Report:{' '}
                  <Button
                    startIcon={<AddIcon />}
                    variant="contained"
                    color="secondary"
                    style={{
                      marginTop: '10px',
                      marginLeft: '30px',
                      borderRadius: '5px',
                    }}
                  >
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
