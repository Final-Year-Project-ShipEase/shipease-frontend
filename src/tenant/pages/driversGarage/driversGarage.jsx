import React from "react";
import TenantDetails from "./recentBookingComponent/driversDetails";
import TabComponent from "./tabComponent";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

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
            <TenantDetails tenantId={id} />
          </Box>
    
          <Box sx={{ mt: '32px', borderTop: '1px dashed #BEBEBE' }}>
            <TabComponent />
          </Box>
        </Box>
      );
};

export default DriversGarage;