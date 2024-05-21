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
import AddIcon from '@mui/icons-material/Add';
import useDriverService from '../../../../admin/services/driverService';
import PageHeader from '../pageHeader';

const DriversDetails = ({ driverId, onSearch }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [driver, setDriver] = useState({});
  const [loading, setLoading] = useState(false);
  const { getDriver } = useDriverService();

  useEffect(() => {
    const fetchDriver = async () => {
      try {
        setLoading(true);
        const response = await getDriver(driverId);
        setDriver(response);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchDriver();
  }, [driverId]);

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
        <PageHeader onSearch={onSearch} />
      </Box>

      <Grid container spacing={2} sx={{ marginLeft: '5%', mt: '2%' }}>
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
                sx={{
                  color: theme.palette.buttons.main,
                  fontSize: '27px',
                  fontWeight: 'bold',
                }}
              >
                {driver?.name || 'John Doe'}
              </Typography>
              <Typography
                sx={{ color: theme.palette.buttons.main, fontSize: '12px' }}
              >
                @{driver?.username || 'hello123'} /{' '}
                {driver?.email || 'hello123@gmail.com'}
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
              marginLeft: '-140px',
            }}
          >
            <Grid item xs={8} sx={{}}>
              <Typography
                sx={{ color: theme.palette.buttons.main, fontSize: '20px' }}
              >
                Phone: {driver?.phoneNo || '1234567890'}
              </Typography>
              <Typography
                sx={{ color: theme.palette.buttons.main, fontSize: '16px' }}
              >
                CNIC: {driver?.cnic ? driver?.cnic : 'English'}
              </Typography>
              <Typography
                sx={{ color: theme.palette.buttons.main, fontSize: '16px' }}
              >
                Driver Id: {driver?.id || '12345678'}
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
                  Status :{driver?.status || 'Active'}
                </Typography>
                <Typography
                  sx={{ color: theme.palette.buttons.main, fontSize: '16px' }}
                >
                  Created At :
                  {driver?.createdAt
                    ? formatTimestamp(driver.createdAt)
                    : '19/4/2023 01:23 PM EDT'}
                </Typography>

                <Typography
                  sx={{
                    color: theme.palette.buttons.main,
                    fontSize: '16px',
                    marginTop: '10px',
                  }}
                >
                  License Digital Copy :{' '}
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
