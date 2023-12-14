import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import PageHeader from './pageHeader';
import TableData from './components/table/table';
import { VehicleColumns, dummyVehicleData } from './_columns.js';
import useVehicleApprovalService from '../../services/vehicleApprovalService.jsx';
import Spinner from '../../../utils/spinner';
import { Grid } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const VehicleApproval = () => {
  const { getRejectedApproval } = useVehicleApprovalService();
  const [vehiclesApproval, setVehiclesApproval] = useState([]);
  const [loading, setLoading] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getRejectedApproval();
        setVehiclesApproval(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [VehicleApproval]);

  return (
    <Grid
      container
      direction="column"
      width="95%"
      height="100%"
      sx={{ margin: '40px' }}
    >
      {loading && (
        <Grid item>
          <Spinner />
        </Grid>
      )}

      <Grid
        item
        xs={1}
        container
        justifyContent="space-between"
        alignItems="center"
        height="7%"
        sx={{ mt: isSmallScreen ? '-3%' : -2 }}
      >
        <PageHeader />
      </Grid>

      <Grid item xs={2} sx={{ mt: isSmallScreen ? '5%' : -1 }} flex="1">
        <TableData columns={VehicleColumns} rows={vehiclesApproval} />
      </Grid>
    </Grid>
  );
};

export default VehicleApproval;
