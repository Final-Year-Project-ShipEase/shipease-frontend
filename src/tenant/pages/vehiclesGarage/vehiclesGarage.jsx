import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import DriversDetails from './recentBookingComponent/VehiclesDetails.jsx';
import TableData from './components/table/table';
import { DriverColumns } from './_columns.js';
import { useVehicleService } from '../../../services/vehicleServices.jsx';
import Spinner from '../../../utils/spinner.jsx';

const VehiclesGarage = () => {
  const id = 1;
  const { getVehicleByTenantId } = useVehicleService();
  const [vehicleList, setVehicleList] = useState([]);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getVehicleByTenantId(id);
        setVehicleList(response.tenants);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: 2,
      }}
    >
      {Loading && <Spinner />}
      <Box
        sx={{
          marginBottom: '-10px',
          width: '100%',
          height: '100%',
          borderRadius: '10px',
          boxShadow: '0px 2px 14px rgba(0, 0, 0, 1)',
        }}
      >
        <DriversDetails tenantId={id} />
      </Box>
      <Box sx={{ mt: '30px', borderTop: '1px dashed black' }}>
        <Box sx={{ mt: '-10px' }}>
          <TableData columns={DriverColumns} rows={vehicleList} />
        </Box>
      </Box>
    </Box>
  );
};

export default VehiclesGarage;
