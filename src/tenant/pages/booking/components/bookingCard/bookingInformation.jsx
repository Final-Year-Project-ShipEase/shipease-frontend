import React from 'react';
import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useBookingService } from '../../../../../services/bookingServices';
import { useUserService } from '../../../../../services/userServices';


const BookingInformation = () => {
    const [booking, setBookings] = useState([]);
    const { getBookingList } = useBookingService();
    const {getUserList} = useUserService();
    const [users, setUser] = useState([]);
    const theme = useTheme();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const bookingRespone = await getBookingList();
                const userResponse = await getUserList();
                setBookings(bookingRespone);
                console.log(bookingRespone);
                setUser(userResponse); 
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [getBookingList, getUserList]);

    return (
     <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        {booking.map((bookings) => (
            <Box sx={{
                backgroundColor: theme.palette.primary.backgroundColor,
                width:'30%',
                height:'40%',
                borderRadius:'10px',
                marginLeft:'20px',
                marginBottom: '20px',
            }}>
                <Box sx={{
                    display:'flex',
                    flexDirection:'column',
                }}>
                   <Box sx={{
                    display:'flex',
                    flexDirection:'space-between',
                   }}>
                        <Box sx={{
                            fontSize:'20px',
                            fontWeight:'bold',
                            color:theme.palette.primary.text,
                            padding:'10px',
                        }}>
                            <Box sx={{
                                backgroundColor:
                                bookings.status == 'active' ? theme.palette.background.bookingActiveStatus
                                : bookings.status == 'reserved' ? theme.palette.background.bookingReservedStatus
                                : bookings.status == 'completed' ? theme.palette.background.bookingCompletedStatus:
                                'transparent',
                                borderRadius:'5px'
                            }}>
                                {bookings.status}
                            </Box>
                        </Box>
                    </Box> 
    
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>
                        <Box sx={{
                            fontSize:'15px',
                            color:theme.palette.primary.text,
                            paddingLeft:'10px'
                        }}>
                            {bookings.pickup} - {bookings.dropoff}
                        </Box>
    
                        <Box sx={{
                            fontSize:'15px',
                            color:theme.palette.primary.text,
                            paddingRight:'40px'
                        }}>
                            {bookings.total_bill} PKR
                        </Box>
                    </Box>
    
                    <Box sx={{
                        display:'flex',
                        flexDirection:'column',
                    }}>
                        <Box sx={{
                            fontSize:'12px',
                            color:theme.palette.primary.text,
                            padding:'10px'
                        }}>
                            Est aspernatur nostrum et molestias perspiciatis eum vitae quia non quod iste ex cumque doloribus aut repellat
                        </Box>
                    </Box>
    
                    <Box sx={{
                        display:'flex',
                        flexDirection:'column',
                    }}>
                        <Box sx={{
                            fontSize:'15px',
                            fontWeight:'bold',
                            color:theme.palette.primary.text,
                            padding:'10px'
                        }}>
                            Client: {users.find((user) => user.id === bookings.user_id)?.name}
                        </Box>
                    </Box>
    
                    <Box sx={{
                        display:'flex',
                        flexDirection:'row',
                        justifyContent: 'space-between'
                    }}>
                        <Box sx={{
                            fontSize:'15px',
                            color:theme.palette.primary.text,
                            padding:'10px'
                        }}>
                            Date: {bookings.date}
                        </Box>
                    </Box>
                </Box>
            </Box>
        ))}
     </Box>   
    )
};

export default BookingInformation;