import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import PageHeader from './pageHeader';
import TableData from './components/table/table';
import { TenantsColumns, dummyTenantData } from './_columns.js';
import useTenantService from '../../services/tenantService.jsx';

const ManageTenantList = () => {
  const { getTenants } = useTenantService();
  const [tenants, setTenants] = React.useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTenants();
      setTenants(data);
      console.log(tenants);
    };
    fetchData();
  }, []);
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        p: 2,
      }}
    >
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
        <TableData columns={TenantsColumns} rows={dummyTenantData} />
      </Box>
    </Box>
  );
};

export default ManageTenantList;
