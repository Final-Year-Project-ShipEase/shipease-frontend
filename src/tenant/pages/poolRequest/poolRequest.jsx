import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import PageHeader from './pageHeader';
import PoolRequestInformation from './poolRequestCard/poolrequestInformation';
import { usePoolRequestService } from '../../../services/poolRequestServices';
import { useBookingService } from '../../../services/bookingServices';

const PoolRequest = () => {
  const [poolRequests, setPoolRequests] = useState({
    currentTenant: [],
    otherTenants: [],
  });

  const currentTenantId = localStorage.getItem('tenantData')?.data?.id || 2;
  const { getPoolRequestList } = usePoolRequestService();
  const { getBooking } = useBookingService();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const poolRequestResponse = await getPoolRequestList();
        const enhancedPoolRequests = await Promise.all(
          poolRequestResponse.map(async (request) => {
            try {
              const bookingDetails = await getBooking(request.booking_id);
              return { ...request, bookingDetails };
            } catch (bookingError) {
              console.error('Booking fetch error:', bookingError);
              return request;
            }
          })
        );

        const currentTenantRequests = enhancedPoolRequests
          .filter(
            (request) => request.bookingDetails.tenant_id === currentTenantId
          )
          .sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
        const otherTenantRequests = enhancedPoolRequests
          .filter(
            (request) => request.bookingDetails.tenant_id !== currentTenantId
          )
          .sort((a, b) => new Date(a.startDate) - new Date(b.startDate));

        setPoolRequests({
          currentTenant: currentTenantRequests,
          otherTenants: otherTenantRequests,
        });
        console.log('Pool requests:', poolRequests);
        setLoading(false);
      } catch (fetchError) {
        console.error('Failed to fetch data:', fetchError);
        setError('Failed to load pool requests. Please try again later.');
      }
    };
    fetchData();
  }, []);

  return (
    <Grid container>
      <Grid item xs={12}>
        <PageHeader />
      </Grid>
      <Grid item xs={12}>
        <PoolRequestInformation
          poolRequests={poolRequests}
          error={error}
          loading={loading}
        />
      </Grid>
    </Grid>
  );
};

export default PoolRequest;
