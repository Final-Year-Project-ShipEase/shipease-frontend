import React, { useEffect, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TableData from './table/table';
import { BookingColumns } from './recentBookingComponent/_columns';
import { VehicleColumns } from './vehicleDetailsComponent/_columns';
import { DriverColumns } from './driverDetailsComponent/_columns';
import { useParams } from 'react-router-dom';
import { useVehicleService } from '../../../services/vehicleServices';
import useDriverService from '../../services/driverService';
import { useBookingService } from '../../../services/bookingServices';

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
  const [bookingList, setBookingList] = useState([]);
  const { getBookingListByTenantId } = useBookingService();

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
    const fetchBookingData = async () => {
      try {
        await getBookingListByTenantId(id)
          .then((response) => {
            setBookingList(response);
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
    };
    fetchBookingData();
    fetchDriverData();
    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      <CustomTabPanel value={value} style={{ margintop: '120px' }} index={0}>
        <TableData columns={BookingColumns} rows={bookingList} />
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
