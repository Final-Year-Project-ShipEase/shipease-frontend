import React, { useEffect, useState } from 'react';
import { Box, Grid, useTheme, useMediaQuery } from '@mui/material';
import PageHeader from './pageHeader';
import TableData from './components/table/table';
import { TenantsColumns } from './_columns.js';
import useTenantService from '../../services/tenantService.jsx';
import Spinner from '../../../utils/spinner';

const ManageTenantList = () => {
  const { getTenants } = useTenantService();
  const [tenants, setTenants] = useState([]);
  const [filteredTenants, setFilteredTenants] = useState([]);
  const [loading, setLoading] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const fetchData = async () => {
    setLoading(true);
    const data = await getTenants();
    setTenants(data);
    setFilteredTenants(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (searchTerm) => {
    const filteredData = tenants.filter((tenant) =>
      Object.values(tenant).some((value) =>
        String(value).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredTenants(filteredData);
  };

  return (
    <Grid
      container
      direction="column"
      width="95%"
      height="100%"
      sx={{ margin: '40px' }}
    >
      {loading && <Spinner />}
      <PageHeader onSearch={handleSearch} />
      <TableData
        columns={TenantsColumns}
        rows={filteredTenants}
        setLoading={setLoading}
      />
    </Grid>
  );
};

export default ManageTenantList;
