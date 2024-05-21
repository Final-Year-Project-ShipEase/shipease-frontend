import React, { useEffect, useState } from 'react';
import { Grid, useMediaQuery, useTheme } from '@mui/material';
import PageHeader from './pageHeader';
import TableData from './components/table/table';
import { VehicleColumns } from './_columns.js';
import useVehicleService from '../../services/vehicleService.jsx';
import Spinner from '../../../utils/spinner';

const VehicleApproval = () => {
  const { getVehicles, approveVehicle } = useVehicleService();
  const [vehicles, setVehicles] = useState([]);
  const [filteredVehicles, setFilteredVehicles] = useState([]);
  const [loading, setLoading] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getVehicles();
        setVehicles(data);
        setFilteredVehicles(data);
      } catch (error) {
        console.error("There's an error in fetching the data");
      }
      setLoading(false);
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
    <Grid container direction="row" sx={{ padding: '40px' }}>
      {loading && <Spinner />}
      <Grid item xs={12}>
        <PageHeader onSearch={handleSearch} />
      </Grid>
      <Grid item xs={12} sx={{ mt: isSmallScreen ? '5%' : -1 }} flex="1">
        <TableData
          columns={VehicleColumns}
          rows={filteredVehicles}
          handleApprove={approveVehicle}
        />
      </Grid>
    </Grid>
  );
};

export default VehicleApproval;
