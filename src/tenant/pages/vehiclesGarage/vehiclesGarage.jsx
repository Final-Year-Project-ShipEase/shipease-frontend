import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import VehicleDetails from './recentBookingComponent/VehiclesDetails.jsx';
import TableData from './components/table/table';
import { VehicleColumns } from './_columns.js';
import { useVehicleService } from '../../../services/vehicleServices.jsx';
import Spinner from '../../../utils/spinner.jsx';

const VehiclesGarage = () => {
  const id = 1;
  const { getVehicleByTenantId } = useVehicleService();
  const [vehicleList, setVehicleList] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [tenantId, setTenantId] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getVehicleByTenantId(1);
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
        <VehicleDetails tenantId={tenantId} />
      </Box>
      <Box sx={{ mt: '30px', borderTop: '1px dashed black' }}>
        <Box sx={{ mt: '-10px' }}>
          <TableData
            columns={VehicleColumns}
            rows={vehicleList}
            setTenantId={setTenantId}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default VehiclesGarage;
