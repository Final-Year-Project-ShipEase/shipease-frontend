import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import VehicleDetails from './recentBookingComponent/VehiclesDetails.jsx';
import TableData from './components/table/table';
import { VehicleColumns } from './_columns.js';
import { useVehicleService } from '../../../services/vehicleServices.jsx';
import Spinner from '../../../utils/spinner.jsx';
import { useSnackbar } from '../../../utils/snackbarContextProvider.jsx';

const VehiclesGarage = () => {
  const [tenantId, setTenantId] = useState('');
  const id = JSON.parse(localStorage.getItem('tenantData')).data.id || 2;
  const { getVehicleByTenantId } = useVehicleService();
  const [vehicles, setVehicles] = useState([]);
  const [filteredVehicles, setFilteredVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const { show } = useSnackbar();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getVehicleByTenantId(id);
        setVehicles(response.tenants);
        setFilteredVehicles(response.tenants);
        setLoading(false);
      } catch (error) {
        show(error.message, 'error');
      }
    };
    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = vehicles.filter((vehicle) =>
      Object.values(vehicle).some((value) =>
        String(value).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredVehicles(filtered);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: 2,
      }}
    >
      {loading && <Spinner />}
      <Box
        sx={{
          marginBottom: '-10px',
          width: '100%',
          height: '100%',
          borderRadius: '10px',
          boxShadow: '0px 2px 14px rgba(0, 0, 0, 1)',
        }}
      >
        <VehicleDetails tenantId={tenantId} onSearch={handleSearch} />
      </Box>
      <Box sx={{ mt: '30px', borderTop: '1px dashed black' }}>
        <Box sx={{ mt: '-10px' }}>
          <TableData
            columns={VehicleColumns}
            rows={filteredVehicles}
            setTenantId={setTenantId}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default VehiclesGarage;
