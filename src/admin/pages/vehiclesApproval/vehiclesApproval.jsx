import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import PageHeader from './pageHeader';
import TableData from './components/table/table';
import { VehicleColumns, dummyVehicleData } from './_columns.js';
import useVehicleApprovalService from '../../services/vehicleApprovalService.jsx';
import Spinner from '../../../utils/spinner';

const VehicleApproval = () => {
  const { getRejectedApproval } = useVehicleApprovalService();
  const [vehiclesApproval, setVehiclesApproval] = useState([]);
  const [loading, setLoading] = useState(false);

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
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        p: 2,
      }}
    >
      {loading && <Spinner />}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          height: '7%',
        }}
      >
        <PageHeader />
      </Box>
      <Box sx={{ mt: 2 }}>
        <TableData columns={VehicleColumns} rows={vehiclesApproval} />
      </Box>
    </Box>
  );
};

export default VehicleApproval;
