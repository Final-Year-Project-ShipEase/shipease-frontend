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
  const [filteredPoolRequests, setFilteredPoolRequests] = useState({
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
        console.log('Pool request response:', poolRequestResponse);
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
        console.log('Enhanced pool requests:', enhancedPoolRequests);
        setPoolRequests({
          currentTenant: enhancedPoolRequests.filter(
            (request) => request.bookingDetails.tenant_id === currentTenantId
          ),
          otherTenants: enhancedPoolRequests.filter(
            (request) => request.bookingDetails.tenant_id !== currentTenantId
          ),
        });
        setFilteredPoolRequests({
          currentTenant: enhancedPoolRequests.filter(
            (request) => request.bookingDetails.tenant_id === currentTenantId
          ),
          otherTenants: enhancedPoolRequests.filter(
            (request) => request.bookingDetails.tenant_id !== currentTenantId
          ),
        });
        console.log('Pool requests:', filteredPoolRequests);
        setLoading(false);
      } catch (fetchError) {
        console.error('Failed to fetch data:', fetchError);
        setError('Failed to load pool requests. Please try again later.');
      }
    };
    fetchData();
  }, []);

  const handleSearch = (searchTerm) => {
    if (!searchTerm.trim()) {
      setFilteredPoolRequests(poolRequests);
      return;
    }
    const searchLowerCase = searchTerm.toLowerCase();
    const filtered = {
      currentTenant: poolRequests.currentTenant.filter((request) =>
        Object.values(request).some((value) =>
          String(value).toLowerCase().includes(searchLowerCase)
        )
      ),
      otherTenants: poolRequests.otherTenants.filter((request) =>
        Object.values(request).some((value) =>
          String(value).toLowerCase().includes(searchLowerCase)
        )
      ),
    };
    setFilteredPoolRequests(filtered);
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <PageHeader onSearch={handleSearch} />
      </Grid>
      <Grid item xs={12}>
        <PoolRequestInformation
          poolRequests={filteredPoolRequests}
          error={error}
          loading={loading}
        />
      </Grid>
    </Grid>
  );
};

export default PoolRequest;
