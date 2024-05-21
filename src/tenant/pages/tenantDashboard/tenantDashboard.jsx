import React, { useEffect, useState } from 'react';
import CardViewImage from '../../components/card/welcome';
import SummaryCard from '../../components/card/summary';
import Booking from '../../components/card/booking';
import Performance from '../../components/card/performance';
import TopTenant from '../../components/card/topDriver';
import Order from '../../components/card/order';
import PoolRequestBox from '../../components/card/poolRequestBox';
import { Grid, Box } from '@mui/material';
import { usePoolRequestService } from '../../../services/poolRequestServices';

const TenantDashboard = () => {
  const name = JSON.parse(localStorage.getItem('tenantData'))?.data.name || '';
  const [tenantName] = useState(name);
  const [revenue] = useState('250K');
  const { getPoolRequestList } = usePoolRequestService();
  const [poolRequestList, setPoolRequestList] = useState([]);

  useEffect(() => {
    const fetchPoolRequest = async () => {
      const poolRequestList = await getPoolRequestList();
      setPoolRequestList(poolRequestList);
      console.log(poolRequestList);
    };
    fetchPoolRequest();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '2%',
      }}
    >
      <Grid container spacing={2}>
        <Grid item md={3} xs={12}>
          <CardViewImage name={tenantName} />
        </Grid>
        <Grid item md={5} xs={12}>
          <SummaryCard />
        </Grid>
        <Grid item md={4} xs={12}>
          <Booking />
        </Grid>
        <Grid item md={12} xs={12}>
          <Performance />
        </Grid>
        <Grid item md={4} xs={12}>
          <TopTenant tenantName={tenantName} totalRevenue={revenue} />
        </Grid>
        <Grid item md={4} xs={12}>
          <Order />
        </Grid>
        <Grid item md={4} xs={12}>
          <PoolRequestBox poolRequestList={poolRequestList} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default TenantDashboard;
