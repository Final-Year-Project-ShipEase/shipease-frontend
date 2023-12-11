import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import PageHeader from './pageHeader';
import TableData from './components/table/table';
import { TenantsColumns, dummyTenantData } from './_columns.js';
import useTenantService from '../../services/tenantService.jsx';
import Spinner from '../../../utils/spinner';

const ManageTenantList = () => {
  const { getTenants } = useTenantService();
  const [tenants, setTenants] = useState([]);
  const [loading, setLoading] = useState(false);

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
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        p: 2,
      }}
    >
      {loading && <Spinner />}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          height: '7%',
        }}
      >
        <PageHeader />
      </Box>
      <Box sx={{ mt: 2 }}>
        <TableData
          columns={TenantsColumns}
          rows={tenants}
          setLoading={setLoading}
        />
      </Box>
    </Box>
  );
};

export default ManageTenantList;
