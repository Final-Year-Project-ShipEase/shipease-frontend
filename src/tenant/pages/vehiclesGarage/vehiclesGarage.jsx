import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import VehicleDetails from './recentBookingComponent/VehiclesDetails.jsx';
import TableData from './components/table/table';
import { VehicleColumns } from './_columns.js';
import { useVehicleService } from '../../../services/vehicleServices.jsx';
import Spinner from '../../../utils/spinner.jsx';
import { useSnackbar } from '../../../utils/snackbarContextProvider.jsx';

const VehiclesGarage = () => {
  const id = localStorage.getItem('tenantData')?.data?.id || 2;
  const { getVehicleByTenantId } = useVehicleService();
  const [vehicleList, setVehicleList] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [tenantId, setTenantId] = useState('');
  const { show } = useSnackbar();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getVehicleByTenantId(id)
          .then((response) => {
            setVehicleList(response.tenants);
          })
          .catch((err) => {
            show(err.message, 'error');
          });
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
