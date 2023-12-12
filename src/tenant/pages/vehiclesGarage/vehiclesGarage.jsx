import React from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import DriversDetails from "./recentBookingComponent/VehiclesDetails.jsx";
import TableData from './components/table/table';
import { DriverColumns, dummyDriverData } from './_columns.js';
const VehiclesGarage = () => {
        const { id } = useParams();
        return (
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100px',
                    padding: 2,
                }}
            >
                <Box
                    sx={{
                        marginBottom: '-10px',
                        width: '100%',
                        height: '380px',
                        borderRadius: '10px',
                        boxShadow: '0px 2px 14px rgba(0, 0, 0, 1)', // Add drop shadow
                    }}
                >
                    <DriversDetails tenantId={id} />
                </Box>
                <Box sx={{ mt: '30px', borderTop: '1px dashed black' }}>
                <Box sx={{ mt: '-10px'}}>
                    <TableData columns={DriverColumns} rows={dummyDriverData} />
                </Box>
            </Box>
            </Box>
        );
};

export default VehiclesGarage;