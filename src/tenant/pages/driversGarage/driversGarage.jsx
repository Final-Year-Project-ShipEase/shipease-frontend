import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import DriversDetails from './recentBookingComponent/driversDetails';
import TableData from './components/table/table';
import { DriverColumns } from './_columns.js';
import useDriverService from '../../../admin/services/driverService.jsx';
const DriversGarage = () => {
  const { getDriverByTenantId } = useDriverService();
  const [drivers, setDrivers] = useState([]);
  const [driverId, setDriverId] = useState('');
  const id = 1;
  useEffect(() => {
    const fetchDrivers = async () => {
      try {
        const response = await getDriverByTenantId(id);
        setDrivers(response.tenants);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDrivers();
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: 2,
      }}
    >
      <Box
        sx={{
          marginBottom: '-10px',
          width: '100%',
          height: '100%',
          borderRadius: '10px',
          boxShadow: '0px 2px 14px rgba(0, 0, 0, 1)',
        }}
      >
        <DriversDetails driverId={driverId} />
      </Box>

      <Box sx={{ mt: '30px', borderTop: '1px dashed black' }}>
        <Box sx={{ mt: '-10px' }}>
          <TableData
            columns={DriverColumns}
            rows={drivers}
            setDriverId={setDriverId}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default DriversGarage;
