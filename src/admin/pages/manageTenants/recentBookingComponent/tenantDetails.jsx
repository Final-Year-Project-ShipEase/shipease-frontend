import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles'
import Card from '@mui/material/Card';
import busImage from '../../../resources/image 1.png'
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';

const TenantDetails = () => {

    const theme = useTheme();

    return (
        <Card sx={{ borderRadius: '5px', backgroundColor: theme.palette.primary.backgroundColor, width: '100%', height: '280px', borderRadius: '10px' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: 1 }}>
                <ArrowBackRoundedIcon sx={{ color: theme.palette.primary.main }} />
                <Button sx={{ color: theme.palette.buttons.main, fontSize: '12px' }}>Back to Tenant List</Button>
            </Box>

            <Grid container spacing={2} sx={{ marginLeft: '5px'}}>
                <Grid item xs={3} >
                    <img style={{ borderRadius: '5px', height: '100%' }} src={busImage} alt="Bus-Image" />
                </Grid>
                <Grid item xs={9}>
                    <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                        <Grid>
                            <Typography sx={{ color: theme.palette.buttons.main, fontSize: '20px' }}>Louise Salazar</Typography>
                            <Typography sx={{ color: theme.palette.buttons.main, fontSize: '16px' }}>@lusalazar</Typography>
                            <Typography sx={{ color: theme.palette.buttons.main, fontSize: '16px' }}>lsalazar@gmai.com</Typography>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop:'30px'}}>
                        <Grid item xs={8} >
                            <Typography sx={{ color: theme.palette.buttons.main, fontSize: '20px' }}>Phone   :+92139473928</Typography>
                            <Typography sx={{ color: theme.palette.buttons.main, fontSize: '16px' }}>Language:-</Typography>
                            <Typography sx={{ color: theme.palette.buttons.main, fontSize: '16px' }}>TenantID:15b3c77d-3a00-4773-b27-2db6bb350fa</Typography>
                        </Grid>
                        <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                            <Grid >
                                <Typography sx={{ color: theme.palette.buttons.main, fontSize: '20px' }}>Status   :Active</Typography>
                                <Typography sx={{ color: theme.palette.buttons.main, fontSize: '16px' }}>Created  :19/4/2023 01:10 PM EDT</Typography>
                                <Typography sx={{ color: theme.palette.buttons.main, fontSize: '16px' }}>Created  :19/4/2023 01:23 PM EDT</Typography>
                            </Grid>
                        </Grid>
                    </Grid>



                </Grid>
            </Grid>
        </Card>
    );
};

export default TenantDetails;