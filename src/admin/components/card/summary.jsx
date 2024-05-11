import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import SubCard from './subCard';
import useTenantService from '../../services/tenantService';
import { useNavigate } from 'react-router-dom';
import useDriverApprovalService from '../../services/driverApprovalServices';
import useVehicleApprovalService from '../../services/vehicleApprovalService';
import vehicleData from '../../components/card/dummyVehicleApproval';
import driverData from '../../components/card/dummyDriverApproval';
import tenantData from '../../components/card/dummyTenantRegistered';
import userData from '../../components/card/dummyUserRegistration';

const SummaryCard = () => {
  const { getTenants } = useTenantService();
  const [tenants, setTenants] = useState([]);
  const { getDriverApprovalList } = useDriverApprovalService();
  const [driverApprovals, setDriverApprovals] = useState([]);
  const { getVehiclesApproval } = useVehicleApprovalService();
  const [vehicleApprovals, setVehicleApprovals] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getTenantData = async () => {
      try {
        const tenants = await getTenants();
        setTenants(tenants.length);
      } catch (error) {
        console.log(error);
      }
    };
    const getDriverApprovalData = async () => {
      try {
        const driverApprovals = await getDriverApprovalList();
        setDriverApprovals(driverApprovals.length);
      } catch (error) {
        console.log(error);
      }
    };
    const getVehicleApprovalData = async () => {
      try {
        const vehicleApprovals = await getVehiclesApproval();
        setVehicleApprovals(vehicleApprovals.length);
      } catch (error) {
        console.log(error);
      }
    };
    getVehicleApprovalData();
    getDriverApprovalData();
    getTenantData();
  }, []);

  return (
    <Card
      sx={{
        width: '100%',
        height: 280,
        position: 'relative',
        borderRadius: 5,
      }}
    >
      <CardContent
        sx={{
          wordWrap: 'break-word',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          width: '100%',
        }}
      >
        <Typography
          variant="h6"
          gutterBottom
          sx={{ textAlign: 'center', marginBottom: '5px', color: 'black' }}
        >
          Performance Summary,
        </Typography>
      </CardContent>

      <CardContent
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginLeft: '3%',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <SubCard
            content="Tenant Registered"
            count={tenants || 5}
            onClick={() => {
              navigate('/admin/manageTenants');
            }}
            data={tenantData}
          />
          <SubCard
            content="Drivers Approvals"
            count={driverApprovals || 5}
            onClick={() => {
              navigate('/admin/driversApproval');
            }}
            data={driverData}
          />
        </div>
      </CardContent>

      <CardContent
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginLeft: '3%',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <SubCard
            content="Vehicle's Approvals"
            count={vehicleApprovals || 10}
            onClick={() => {
              navigate('/admin/vehiclesApproval');
            }}
            data={vehicleData}
          />
          <SubCard content="User's Registered" count={15} data={userData} />
        </div>
      </CardContent>
    </Card>
  );
};

export default SummaryCard;
