const generateDummyData = () => {
  const dummyData = [];

  for (let i = 1; i <= 15; i++) {
    dummyData.push({
      type: `type${i}`,
      id: i,
      city: `city${i}`,
      tenant: `Tenant ${i}`,
      actions: `Action ${i}`,
    });
  }

  return dummyData;
};

export const VehicleColumns = [
  {
    id: 'id',
    label: 'Reg No',
    width: '30%',
    numeric: false,
    disablePadding: false,
  },
  {
    id: 'vehicle_id',
    label: 'Vehicle ID',
    width: '20%',
    numeric: false,
    disablePadding: false,
  },
  {
    id: 'tenant_id',
    label: 'Tenant ID',
    width: '25%',
    numeric: false,
    disablePadding: false,
  },
  {
    id: 'actions',
    label: 'Action',
    width: '20%',
    numeric: false,
    disablePadding: false,
  },
];

export const dummyVehicleData = generateDummyData();
