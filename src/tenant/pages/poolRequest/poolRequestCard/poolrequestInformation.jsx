import React from 'react';
import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { usePoolRequestService } from '../../../../services/poolRequestServices';
import PoolRequestDetailsModal from './poolrequestDetailModal';
import { SettingsBackupRestoreOutlined } from '@mui/icons-material';



const PoolRequestInformation = () => {
    const [poolRequest, setPoolRequests] = useState([]);
    const { getPoolRequestList } = usePoolRequestService();
    const [users, setUser] = useState([]);
    const theme = useTheme();
    const [openModal, setModal] = useState(false);

    const [poolRequestId, setPoolRequestId] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const PoolRequestRespone = await getPoolRequestList();
                setPoolRequests(PoolRequestRespone);
                console.log(PoolRequestRespone);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    const handlePoolRequestClick = (poolRequestId) => {
        setPoolRequestId(poolRequestId);
        setModal(true);
    };

    return (
     <Box sx={{ display: 'flex', flexWrap: 'wrap' }} >
         <PoolRequestDetailsModal
            open = {openModal}
            handleClose={()=>setModal(false)}
            poolRequest_id={poolRequestId}
        />
        {poolRequest.map((poolRequest) => (
            <Box sx={{
                backgroundColor: theme.palette.primary.backgroundColor,
                width:'30%',
                height:'40%',
                borderRadius:'10px',
                marginLeft:'20px',
                marginBottom: '20px',
            }} 
            onClick={() => handlePoolRequestClick(poolRequest.id)} 
            style={{ cursor: 'pointer' }}>
                
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
                                poolRequest.types == 'active' ? theme.palette.background.bookingCompletedStatus
                                : poolRequest.types == 'reserved' ? theme.palette.background.bookingReservedStatus
                                : poolRequest.types == 'bid' ? theme.palette.background.bookingBidStatus
                                : poolRequest.types == 'completed' ? theme.palette.background.bookingCompletedStatus:
                                'transparent',
                                borderRadius:'5px',
                                paddingLeft: '10px',
                                paddingRight: '10px'
                            }}>
                                {poolRequest.types}
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
                            {poolRequest.city} - {poolRequest.destination}
                        </Box>
    
                        <Box sx={{
                            fontSize:'15px',
                            color:theme.palette.primary.text,
                            paddingRight:'40px'
                        }}>
                            {poolRequest.price} PKR
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
                            Tenant: {users.find((user) => user.id === poolRequest.user_id)?.name}
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
                            Date: {poolRequest.startDate}
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
                            Date: {poolRequest.types}
                        </Box>
                    </Box>
                </Box>
            </Box>
        ))}
     </Box>   
    )
};

export default PoolRequestInformation;