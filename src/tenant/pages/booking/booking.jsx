import React from 'react';
import { Box } from '@mui/material';
import PageHeader from './pageHeader';
import BookingInformation from './components/bookingCard/bookingInformation';
import Bid from './components/card/bid';
import Completed from './components/card/completed';
import Active from './components/card/active';
import Reserved from './components/card/reserved';

const Booking = () => {
    return (
        <>
            <PageHeader></PageHeader>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
            }}>
                <Bid></Bid>
                <Completed></Completed>
                <Active></Active>
                <Reserved></Reserved>
            </Box>
            <BookingInformation></BookingInformation>
        </>
    )
};

export default Booking;