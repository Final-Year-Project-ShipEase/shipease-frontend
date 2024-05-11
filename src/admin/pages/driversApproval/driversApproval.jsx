import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import PageHeader from './pageHeader';
import TableData from './components/table/table';
import { DriverColumns } from './_columns.js';
import useDriverApprovalService from '../../services/driverApprovalServices.jsx';
import { Grid } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import useDriverService from '../../services/driverService.jsx';

const DriversApproval = () => {
  const { getRejectedApproval } = useDriverApprovalService();
  const [driverData, setDriverData] = useState([]);
  const [loading, setLoading] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const { getDriver } = useDriverService();
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await getRejectedApproval();
      setDriverData(response);
      setLoading(false);
    };
    const fetchDriverData = async () => {
      setLoading(true);
      driverData.forEach(async (driver) => {
        await getDriver(driver.driver_id)
          .then((response) => {
            setDrivers((prev) => [...prev, response]);
          })
          .catch((error) => {
            console.log(error);
          });
      });
    };
    fetchData();
    fetchDriverData();
  }, [driverData, getDriver, getRejectedApproval]);

  return (
    <Grid
      container
      direction="column"
      width="95%"
      height="100%"
      sx={{ margin: '40px' }}
    >
      <Grid
        item
        xs={1}
        container
        justifyContent="space-between"
        alignItems="center"
        height="7%"
        sx={{ mt: isSmallScreen ? '-8%' : -2 }}
      >
        <PageHeader />
      </Grid>
      <Grid item xs={2} sx={{ mt: isSmallScreen ? '10%' : -1 }} flex="1">
        <TableData columns={DriverColumns} rows={drivers} />
      </Grid>
    </Grid>
  );
};

export default DriversApproval;
