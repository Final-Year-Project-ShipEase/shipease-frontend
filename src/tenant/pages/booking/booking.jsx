import React, { useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material';
import PageHeader from './pageHeader';
import BookingInformation from './components/bookingCard/bookingInformation';
import Completed from './components/card/completed';
import Active from './components/card/active';
import Reserved from './components/card/reserved';
import { useUserService } from '../../../services/userServices';
import { useBookingService } from '../../../services/bookingServices';

const Booking = () => {
  const [bookings, setBookings] = useState([]);
  const [user, setUser] = useState([]);
  const [complete, setComplete] = useState(0);
  const [active, setActive] = useState(0);
  const [reserved, setReserved] = useState(0);
  const [filteredBookings, setFilteredBookings] = useState([]);
  const { getBookingList } = useBookingService();
  const { getUserList } = useUserService();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getBookingList();
        const userResponse = await getUserList();

        const sortedBooking = response.sort((a, b) => {
          const order = { active: 1, reserved: 2, completed: 3 };
          return order[a.status] - order[b.status];
        });

        setBookings(sortedBooking);
        setComplete(
          sortedBooking.filter((booking) => booking.status === 'completed')
            .length
        );
        setActive(
          sortedBooking.filter((booking) => booking.status === 'active').length
        );
        setReserved(
          sortedBooking.filter((booking) => booking.status === 'reserved')
            .length
        );
        setFilteredBookings(sortedBooking);
        setUser(userResponse);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = bookings.filter((booking) =>
      Object.keys(booking).some((key) =>
        String(booking[key]).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredBookings(filtered);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Grid item xs={12}>
        <PageHeader onSearch={handleSearch} />
      </Grid>
      <Grid item xs={12}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: '2%',
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={2.5}>
              <Completed complete={complete} />
            </Grid>
            <Grid item xs={12} md={2.5}>
              <Active active={active} />
            </Grid>
            <Grid item xs={12} md={2.5}>
              <Reserved reserved={reserved} />
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <BookingInformation booking={filteredBookings} users={user} />
      </Grid>
    </Box>
  );
};

export default Booking;
