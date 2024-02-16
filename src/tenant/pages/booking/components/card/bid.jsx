import React from 'react';
import { Box } from '@mui/material';
import { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import speaker from './resources/icons8-loudspeaker-32.png';
import { useBookingService } from '../../../../../services/bookingServices';

const Bid = () => {
    const theme = useTheme();
    const [bid, setBid] = useState(0);
    const { getBookingList } = useBookingService();

    useEffect(() => {
        const fetchBooking = async () => {
            try {
                const response = await getBookingList();
                console.log(response);
                const bids = response.filter(booking => booking.status === 'bid');
                setBid(bids.length);      
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
                paddingRight:'70px'
            }}>
                <Box sx={{
                    display: 'flex',
                    fontSize: '20px',
                    fontWeight: 'bold',
                    color: theme.palette.primary.text,
                }}>
                    {bid}
                </Box>
                <Box sx={{
                    display: 'flex',
                    fontSize: '12px',
                    color: theme.palette.primary.text,
                }}>
                    Bids
                </Box>

            </Box>
        </Box>
    )
};

export default Bid;            