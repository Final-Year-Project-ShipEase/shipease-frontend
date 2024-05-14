import React, { useEffect, useState } from 'react';
import { Grid, useTheme, useMediaQuery } from '@mui/material';
import PageHeader from './pageHeader';
import TableData from './components/table/table';
import { DriverColumns } from './_columns.js';
import useDriverApprovalService from '../../services/driverApprovalServices.jsx';
import useDriverService from '../../services/driverService.jsx';

const DriversApproval = () => {
  const { getRejectedApproval: getDriverApprovals } = useDriverApprovalService();
  const [drivers, setDrivers] = useState([]);
  const [filteredDrivers, setFilteredDrivers] = useState([]);
  const [loading, setLoading] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const { getDriver } = useDriverService();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await getDriverApprovals();
      if (response) {
        const fetchDetails = async () => {
          const details = await Promise.all(
            response.map(async (item) => {
              try {
                return await getDriver(item.driver_id);
              } catch (error) {
                console.error('Failed to fetch driver details', error);
                return null;
              }
            })
          );
          const validDrivers = details.filter(Boolean);
          setDrivers(validDrivers);
          setFilteredDrivers(validDrivers);
        };
        fetchDetails();
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleSearch = (searchTerm) => {
    const filteredData = drivers.filter((driver) =>
      Object.keys(driver).some((key) =>
        String(driver[key]).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredDrivers(filteredData);
  };

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
        <PageHeader onSearch={handleSearch} />
      </Grid>
      <Grid item xs={2} sx={{ mt: isSmallScreen ? '10%' : 2 }} flex="1">
        <TableData columns={DriverColumns} rows={filteredDrivers} />
      </Grid>
    </Grid>
  );
};

export default DriversApproval;
