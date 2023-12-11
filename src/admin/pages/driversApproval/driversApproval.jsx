import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import PageHeader from './pageHeader';
import TableData from './components/table/table';
import { DriverColumns } from './_columns.js';
import useDriverApprovalService from '../../services/driverApprovalServices.jsx';

const DriversApproval = () => {
  const { getDriverApprovalList } = useDriverApprovalService();
  const [driverData, setDriverData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await getDriverApprovalList();
      setDriverData(response);
      setLoading(false);
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
        <TableData columns={DriverColumns} rows={driverData} />
      </Box>
    </Box>
  );
};

export default DriversApproval;
