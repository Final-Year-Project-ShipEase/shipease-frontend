import React from 'react';
import { Box } from '@mui/material';
import { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import speaker from './resources/icons8-loudspeaker-32.png';
import { useBookingService } from '../../../../../services/bookingServices';

const Reserved = () => {
    const theme = useTheme();
    const [reserved, setReserved] = useState(0);
    const { getBookingList } = useBookingService();

    useEffect(() => {
        const fetchBooking = async () => {
            try {
                const response = await getBookingList();
                console.log(response);
                const reservedBookings = response.filter(booking => booking.status === 'reserved');
                setReserved(reservedBookings.length);      
            } catch (error) {
                console.log(error);
            }
        };
        fetchBooking();
    }, []);
    return (
        <Box sx={{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            backgroundColor: theme.palette.primary.backgroundColor,
            width: '15%',
            height: '10%',
            borderRadius: '10px',
            marginLeft: '60px',
            marginBottom: '20px',
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                paddingLeft:'30px'
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}>
                    <img src={speaker} alt='Bidding' />
                </Box>
            </Box>

            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                paddingRight:'40px'
            }}>
                <Box sx={{
                    display: 'flex',
                    fontSize: '20px',
                    fontWeight: 'bold',
                    color: theme.palette.primary.text,
                }}>
                    {reserved}
                </Box>
                <Box sx={{
                    display: 'flex',
                    fontSize: '12px',
                    color: theme.palette.primary.text,
                }}>
                    Reserved
                </Box>

            </Box>
        </Box>
    )
};

export default Reserved;            