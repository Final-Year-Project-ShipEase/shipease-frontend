import React from "react";
import TabComponent from "./tabComponent";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import DriversDetails from "./recentBookingComponent/driversDetails";
import TenantDetails from "../../../admin/pages/manageTenants/recentBookingComponent/tenantDetails";

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
    
          <Box sx={{ mt: '32px', borderTop: '1px dashed #BEBEBE' }}>
            <TabComponent />
          </Box>
        </Box>
      );
};

export default DriversGarage;