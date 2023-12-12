import React, { useEffect, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TableData from './table/table';
import {
  BookingColumns,
  dummyBookingData,
} from './recentBookingComponent/_columns';
import {
  VehicleColumns,
  dummyVehicleData,
} from './vehicleDetailsComponent/_columns';
import {
  DriverColumns,
  dummyDriverData,
} from './driverDetailsComponent/_columns';
import { useParams } from 'react-router-dom';
import { useVehicleService } from '../../../services/vehicleServices';
import useDriverService from '../../services/driverService';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const TabComponent = () => {
  const [value, setValue] = useState(0);
  const { id } = useParams();
  const { getVehicleByTenantId } = useVehicleService();
  const { getDriverByTenantId } = useDriverService();
  const [vehicleList, setVehicleList] = useState();
  const [driverList, setDriverList] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getVehicleByTenantId(id);
        setVehicleList(response.tenants);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchDriverData = async () => {
      try {
        const response = await getDriverByTenantId(id);
        setDriverList(response.tenants);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDriverData();
    fetchData();
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            label="Recent Booking"
            sx={{ fontSize: '12px', fontWeight: '600' }}
            {...a11yProps(0)}
          />
          <Tab
            label="Vehicle Details"
            sx={{ fontSize: '12px', fontWeight: '600' }}
            {...a11yProps(1)}
          />
          <Tab
            label="Driver Details"
            sx={{ fontSize: '12px', fontWeight: '600' }}
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <TableData columns={BookingColumns} rows={dummyBookingData} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <TableData columns={VehicleColumns} rows={vehicleList} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <TableData columns={DriverColumns} rows={driverList} />
      </CustomTabPanel>
    </Box>
  );
};

export default TabComponent;
