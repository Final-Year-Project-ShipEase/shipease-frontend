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
  const [loading, setLoading] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const fetchData = async () => {
    setLoading(true);
    const data = await getTenants();
    setTenants(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [loading]);

  return (
    <Grid
      container
      direction="column"
      width="95%"
      height="100%"
      sx={{ margin: '40px' }}
    >
      {loading && (
        <Grid item>
          <Spinner />
        </Grid>
      )}

      <Grid
        item
        xs={1}
        container
        justifyContent="space-between"
        alignItems="center"
        height="7%"
        sx={{ mt: isSmallScreen ? '-8%' : -2 }}
      >
        <PageHeader />
      </Grid>

      <Grid item xs={2} sx={{ mt: isSmallScreen ? '10%' : 2 }} flex="1">
        <TableData
          columns={TenantsColumns}
          rows={tenants}
          setLoading={setLoading}
        />
      </Grid>
    </Grid>
  );
};

export default ManageTenantList;
