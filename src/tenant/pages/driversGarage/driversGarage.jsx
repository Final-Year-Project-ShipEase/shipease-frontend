import React from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import DriversDetails from "./recentBookingComponent/driversDetails";
import TableData from './components/table/table';
import { DriverColumns, dummyDriverData } from './_columns.js';
const DriversGarage = () => {
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
              height: '280px',
              borderRadius: '10px',
            }}
          >
        <DriversDetails tenantId={id} />
          </Box>
    
          <Box sx={{ mt: '90px', borderTop: '1px dashed black' }}>
          <TableData columns={DriverColumns} rows={dummyDriverData} />
      </Box>
        </Box>
      );
};

export default DriversGarage;