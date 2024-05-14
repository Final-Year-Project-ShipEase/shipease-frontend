import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import DriversDetails from './recentBookingComponent/driversDetails';
import TableData from './components/table/table';
import { DriverColumns } from './_columns.js';
import useDriverService from '../../../admin/services/driverService';
import CreateDriver from '../createDriver/createDriver.jsx';
import { useSnackbar } from '../../../utils/snackbarContextProvider.jsx';
import Spinner from '../../../utils/spinner.jsx';

const DriversGarage = () => {
  const [tenantId, setDriverId] = useState(
    localStorage.getItem('tenantData')?.data?.id || 2
  );
  const { getDriverByTenantId } = useDriverService();
  const [drivers, setDrivers] = useState([]);
  const [filteredDrivers, setFilteredDrivers] = useState([]);
  const [loading, setLoading] = useState(true);
  const { show } = useSnackbar();

  useEffect(() => {
    const fetchDrivers = async () => {
      setLoading(true);
      try {
        const response = await getDriverByTenantId(tenantId);
        setDrivers(response.tenants);
        setFilteredDrivers(response.tenants);
      } catch (error) {
        show(error.message, 'error');
      } finally {
        setLoading(false);
      }
    };
    fetchDrivers();
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = drivers.filter((driver) =>
      Object.keys(driver).some((key) =>
        String(driver[key]).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredDrivers(filtered);
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
        <DriversDetails driverId={tenantId} onSearch={handleSearch} />
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
